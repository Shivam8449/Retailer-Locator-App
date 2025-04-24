import { useEffect, useState } from "react";
import RetailerCard from "./RetailerCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import data from "../data/data.json";

// Haversine distance calculation
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const RetailerList = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [retailers, setRetailers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Geolocation error:", err);
      }
    );
  }, []);

  useEffect(() => {
    if (userLocation) {
      const sorted = data
        .map((retailer) => ({
          ...retailer,
          distance: getDistance(
            userLocation.latitude,
            userLocation.longitude,
            retailer.latitude,
            retailer.longitude
          ),
        }))
        .sort((a, b) => a.distance - b.distance);

      setRetailers(sorted);
    }
  }, [userLocation]);

  // Combined Search + Category Filtering
  const filteredRetailers = retailers.filter((r) => {
    const matchesCategory =
      selectedCategory === "All" || r.category === selectedCategory;
    const matchesSearch = r.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 max-w-sm mx-auto bg-gray-100 min-h-screen space-y-4 md:max-w-3xl lg:max-w-4xl">
      {/* Search */}
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
  
      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
  
      {/* List or Message */}
      {!userLocation ? (
        <p className="text-center text-gray-600">Fetching your location…</p>
      ) : filteredRetailers.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filteredRetailers.map((retailer) => (
            <RetailerCard key={retailer.id} retailer={retailer} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No retailers found.</p>
      )}
    </div>
  );
};

export default RetailerList;

