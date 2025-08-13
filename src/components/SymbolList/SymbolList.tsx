import { useState, useEffect } from "react";
import { useSymbols } from "../../context/SymbolContext";
import { useBinanceSymbols } from "../../hooks/useBinanceSymbols";

const SymbolList = () => {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState<string[]>([]);
  const { selectedSymbols } = useSymbols();
  const { symbols, loading } = useBinanceSymbols();
 
  const toggleCheck = (symbol: string) => {
    setChecked(prev =>
      prev.includes(symbol) ? prev.filter(s => s !== symbol) : [...prev, symbol]
    );
  };

  const filtered = symbols.filter(s =>
    s.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    selectedSymbols(checked)
  },[checked]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col max-h-[500px]">
        
      <div className="flex items-center mb-3 border border-gray-300 rounded px-3 py-1">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none text-gray-700"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z" />
        </svg>
      </div>

      {/* Tabela de símbolos */}
      <div className="flex-1 overflow-y-auto border border-gray-200 rounded">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-10 p-2"></th>
              <th className="text-left px-2 py-1 font-medium text-gray-600">Symbol</th>
            </tr>
          </thead>
          <tbody>
            {loading ? "Carregando" : filtered.map(s => (
              <tr
                key={s.symbol}
                className={`cursor-pointer ${
                  checked.includes(s.symbol) ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
                onClick={() => toggleCheck(s.symbol)}
              >
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={checked.includes(s.symbol)}
                    onChange={() => toggleCheck(s.symbol)}
                  />
                </td>
                <td className="px-2 py-1 text-gray-800">{s.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SymbolList;
