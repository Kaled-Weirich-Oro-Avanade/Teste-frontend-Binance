import { useSymbols } from "../../context/SymbolContext";

const Watchlist = () => {
  const { symbols, tickers } = useSymbols();

  return (
    <div className="bg-white shadow rounded p-4 flex-1 max-h-[500px]">
      {symbols.length === 0 ? (
        <p className="text-gray-500">No symbols selected</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-center py-2 min-w-[75px]">Symbol</th>
              <th className="text-center py-2 min-w-[75px]">Last Price</th>
              <th className="text-center py-2 min-w-[75px]">Bid Price</th>
              <th className="text-center py-2 min-w-[75px]">Ask Price</th>
              <th className="text-center py-2 min-w-[75px]">Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {symbols.map((symbol) => {
              const ticker = tickers[symbol];
              return (
                <tr key={symbol} className="border-b">
                  <td className="text-center">{symbol}</td>
                  <td className="text-center">{ticker?.c.slice(0, 5) ?? "—"}</td>
                  <td className="text-center">{ticker?.b.slice(0, 5) ?? "—"}</td>
                  <td className="text-center">{ticker?.a.slice(0, 5) ?? "—"}</td>
                  <td
                    className={`text-center ${
                      ticker
                        ? Number(ticker.P) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                        : ""
                    }`}
                  >
                    {ticker ? `${ticker.P}%` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Watchlist;