import React, { Suspense } from "react";
import { TickerSection } from "@/components/sections/TickerSection";
import { marketTickerData } from "@/data/ticker";
import { getMarketTickerItems } from "@/lib/market";

const LiveTicker = async () => {
  const items = await getMarketTickerItems();

  return <TickerSection items={items} />;
};

/**
 * Renders the market strip with live quotes, showing the static snapshot while
 * the cached quotes are being refreshed.
 */
export const LiveTickerSection: React.FC = () => (
  <Suspense fallback={<TickerSection items={marketTickerData} />}>
    <LiveTicker />
  </Suspense>
);
