import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-md mx-auto md:max-w-2xl">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search retailers..."
        className="w-full pl-10 pr-4 py-2 md:py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  );
};

export default SearchBar;