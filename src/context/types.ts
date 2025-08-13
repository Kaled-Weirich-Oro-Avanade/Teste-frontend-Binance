import type { TickerData } from "../types/binance";

export interface SymbolContextState {
  selectedSymbols: string[];
  tickers: Record<string, TickerData>;
  addSymbol: (symbol: string) => void;
  addMultipleSymbols: (symbols: string[]) => void;
  removeSymbol: (symbol: string) => void;
}