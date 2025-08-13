import type { TickerData } from "../types/binance";

export const createTickerStream = (
  symbols: string[],
  onMessage: (data: TickerData) => void
): WebSocket | null => {
  if (symbols.length === 0) return null;

  const streams = symbols.map((s) => `${s.toLowerCase()}@ticker`).join("/");
  const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.data) {
      onMessage(msg.data as TickerData);
    }
  };

  ws.onerror = (err) => {
    console.error("WebSocket error:", err);
  };

  return ws;
};
