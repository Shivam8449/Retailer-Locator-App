import { createContext, useState, useEffect } from "react";
import data from "../data/data.json";

export const RetailerContext = createContext();

export const RetailerProvider = ({ children }) => {
  const [retailers, setRetailers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setRetailers(data);
  }, []);

  const filteredRetailers = retailers.filter(retailer =>
    retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "All" || retailer.category === category)
  );

  return (
    <RetailerContext.Provider
      value={{ retailers: filteredRetailers, setSearchTerm, setCategory }}
    >
      {children}
    </RetailerContext.Provider>
  );
};
