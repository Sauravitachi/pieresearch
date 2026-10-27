import { MarketTickerItem } from "@/types";
import { marketTickerData } from "@/data/ticker";

/**
 * Static-export stand-in for `@/lib/market`. A `use cache` scope cannot compile
 * without Cache Components, and an exported site has no server to refresh
 * quotes anyway, so the build aliases this module in via `turbopack.resolveAlias`
 * and the ticker renders the fixed snapshot.
 */
export async function getMarketTickerItems(): Promise<MarketTickerItem[]> {
  return marketTickerData;
}
