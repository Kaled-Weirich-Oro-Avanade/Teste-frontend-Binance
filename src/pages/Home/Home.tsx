import SymbolList from "../../components/SymbolList/SymbolList";
import Watchlist from "../../components/WatchList/WatchList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Binance Realtime Tickers</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SymbolList />
          <Watchlist />
        </div>
      </div>
    </div>
  );
};

export default Home;