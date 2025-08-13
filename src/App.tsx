import Home from "./pages/Home/Home";
import { SymbolProvider } from "./context/SymbolContext";

function App() {
  return (
    <SymbolProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-lg font-bold">
          Binance Ticker
        </header>
        <main className="max-w-6xl mx-auto">
          <Home />
        </main>
      </div>
    </SymbolProvider>
  );
}

export default App;