export interface BinanceSymbol {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
}

export interface TickerData {
  s: string;  // Symbol
  c: string;  // Last price
  b: string;  // Best bid price
  a: string;  // Best ask price
  P: string;  // Price change percent
}