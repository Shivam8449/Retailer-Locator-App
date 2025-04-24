import RetailerList from "./components/RetailerList";
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
  📍 Retailer Locator App
</h1>

      <RetailerList />
    </div>
  );
}

export default App;



