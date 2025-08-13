import axios from "axios";
import type { BinanceSymbol } from "../types/binance";

const BASE_URL = "https://api.binance.com/api/v3";

export const getExchangeInfo = async (): Promise<BinanceSymbol[]> => {
  const res = await axios.get(`${BASE_URL}/exchangeInfo`);
  return res.data.symbols.map((s: any) => ({
    symbol: s.symbol,
    baseAsset: s.baseAsset,
    quoteAsset: s.quoteAsset
  }));
};
