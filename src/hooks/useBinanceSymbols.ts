import { useEffect, useState } from "react";
import { getExchangeInfo } from "../api/binanceService";
import type { BinanceSymbol } from "../types/binance";

export const useBinanceSymbols = () => {
  const [symbols, setSymbols] = useState<BinanceSymbol[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExchangeInfo().then(data => {
      setSymbols(data.slice(0, 100)); // pegar somente os 100 primeiros
      setLoading(false);
    });
  }, []);

  return { symbols, loading };
};