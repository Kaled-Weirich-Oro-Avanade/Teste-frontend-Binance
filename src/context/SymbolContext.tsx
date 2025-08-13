import React, { createContext, useContext, useEffect, useState } from "react";
import { createTickerStream } from "../api/websocketService";
import type { TickerData } from "../types/binance";

type SymbolContextType = {
  selectedSymbols: (symbols: string[]) => void;
  tickers: Record<string, TickerData>;
  symbols: string[];
};

const SymbolContext = createContext<SymbolContextType>({} as SymbolContextType);

export const SymbolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [tickers, setTickers] = useState<Record<string, TickerData>>({});

  const selectedSymbols = (symbols: string[]) => {
    setSymbols(symbols);
  }
  useEffect(() => {
    if (symbols.length === 0) return;

    const ws = createTickerStream(symbols, (data) => {
      setTickers((prev) => ({
        ...prev,
        [data.s]: data,
      }));
    });

    return () => ws?.close();
  }, [selectedSymbols]);

  return (
    <SymbolContext.Provider
      value={{ selectedSymbols, symbols, tickers }}
    >
      {children}
    </SymbolContext.Provider>
  );
};

export const useSymbols = () => useContext(SymbolContext);
