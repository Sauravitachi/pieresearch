import { cacheLife } from "next/cache";
import { MarketTickerItem } from "@/types";
import { marketTickerData } from "@/data/ticker";

/**
 * Yahoo Finance quote endpoint. Unofficial and unauthenticated, so quotes are
 * delayed (~15 min on Indian indices) and the feed can change without notice.
 * Display only — never use it as the basis of a research call.
 */
const YAHOO_CHART_API = "https://query1.finance.yahoo.com/v8/finance/chart";

interface TrackedSymbol {
  /** Yahoo Finance symbol. */
  ticker: string;
  symbol: MarketTickerItem["symbol"];
  name: MarketTickerItem["name"];
  category: MarketTickerItem["category"];
  /** Indices are plain numbers, commodities are prefixed with their currency. */
  prefix?: string;
  fractionDigits: number;
}

/**
 * Commodities resolve to COMEX/NYMEX contracts in USD, not the MCX contracts in
 * INR. Yahoo carries no MCX feed — those need a broker API (Upstox, Angel One,
 * Dhan or Kite), so the labels here state the venue actually being quoted.
 */
const TRACKED_SYMBOLS: TrackedSymbol[] = [
  { ticker: "^NSEI", symbol: "NIFTY 50", name: "NSE Benchmark", category: "Index", fractionDigits: 2 },
  { ticker: "^NSEBANK", symbol: "BANK NIFTY", name: "Banking Index", category: "Index", fractionDigits: 2 },
  { ticker: "NIFTY_FIN_SERVICE.NS", symbol: "FINNIFTY", name: "Financial Services", category: "Index", fractionDigits: 2 },
  { ticker: "^BSESN", symbol: "SENSEX", name: "BSE Benchmark", category: "Index", fractionDigits: 2 },
  { ticker: "^CNXIT", symbol: "NIFTY IT", name: "IT Sectoral Index", category: "Index", fractionDigits: 2 },
  { ticker: "GC=F", symbol: "COMEX GOLD", name: "Gold Future / oz", category: "Commodity", prefix: "$", fractionDigits: 1 },
  { ticker: "SI=F", symbol: "COMEX SILVER", name: "Silver Future / oz", category: "Commodity", prefix: "$", fractionDigits: 2 },
  { ticker: "CL=F", symbol: "WTI CRUDE", name: "NYMEX Crude / bbl", category: "Commodity", prefix: "$", fractionDigits: 2 },
];

interface YahooChartMeta {
  regularMarketPrice?: number;
  regularMarketChangePercent?: number;
}

interface YahooChartResponse {
  chart?: {
    result?: { meta?: YahooChartMeta }[];
  };
}

function formatValue(price: number, { prefix, fractionDigits }: TrackedSymbol): string {
  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(price);

  return prefix ? `${prefix}${formatted}` : formatted;
}

function formatChange(changePercent: number): string {
  return `${changePercent >= 0 ? "+" : ""}${changePercent.toFixed(2)}%`;
}

async function fetchQuote(tracked: TrackedSymbol): Promise<MarketTickerItem | null> {
  const url = `${YAHOO_CHART_API}/${encodeURIComponent(tracked.ticker)}?interval=1d&range=1d`;

  try {
    const response = await fetch(url, {
      // Yahoo rejects requests without a browser user agent.
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) return null;

    const payload: YahooChartResponse = await response.json();
    const meta = payload.chart?.result?.[0]?.meta;
    const price = meta?.regularMarketPrice;

    if (typeof price !== "number") return null;

    const changePercent = meta?.regularMarketChangePercent ?? 0;

    return {
      symbol: tracked.symbol,
      name: tracked.name,
      category: tracked.category,
      value: formatValue(price, tracked),
      change: formatChange(changePercent),
      isPositive: changePercent >= 0,
    };
  } catch {
    // Network failure, timeout or malformed payload — fall back to static data.
    return null;
  }
}

/**
 * Live market quotes for the homepage ticker. Falls back to the static snapshot
 * in `@/data/ticker` whenever the upstream feed is unavailable, so the strip
 * never renders empty.
 */
export async function getMarketTickerItems(): Promise<MarketTickerItem[]> {
  "use cache";
  // Quotes are delayed anyway; one minute keeps the strip fresh without the
  // short lifetime that would pull it out of the prerender entirely.
  cacheLife({ stale: 60, revalidate: 60, expire: 600 });

  const quotes = await Promise.all(TRACKED_SYMBOLS.map(fetchQuote));
  const items = quotes.filter((quote): quote is MarketTickerItem => quote !== null);

  return items.length > 0 ? items : marketTickerData;
}
