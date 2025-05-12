import { useState } from "react";
import { ChevronDown, Filter, Tag, Package, Percent, Clock } from "lucide-react";

const SortBy = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState("popular");
  const [activeSection, setActiveSection] = useState("all");

  // Navigation items with icons
  const navItems = [
    { id: "new", label: "New Collection", icon: <Tag size={18} /> },
    { id: "all", label: "All Products", icon: <Package size={18} /> },
    { id: "discounted", label: "Discounted", icon: <Percent size={18} /> },
  ];

  // Filter items with icons
  const filterItems = [
    { id: "availability", label: "Availability", icon: <Clock size={16} /> },
    { id: "discount", label: "Discount", icon: <Percent size={16} /> },
  ];

  const handleSortChange = (value) => {
    setSortBy(value);
    onSortChange(value);
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    // You could add additional logic here
  };

  return (
    <div className="w-full md:w-64 bg-white p-5 rounded-lg shadow-sm border-[0px 0px 0px 4px] border-gray-200">
      {/* Sort by dropdown */}
      <div className="mb-6">
        <label className="font-medium text-gray-700  mb-2 flex items-center">
          <Filter size={18} className="mr-2" />
          Sort By
        </label>
        <div className="relative">
          <select
            className="w-full appearance-none border border-gray-200 rounded-md px-4 py-2 pr-8 bg-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <ChevronDown 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={16}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-5"></div>

      {/* Navigation links */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
        <nav className="flex flex-col space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                activeSection === item.id
                  ? "bg-blue-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-5"></div>

      {/* Filtering options */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Filter By</h3>
        <div className="space-y-1">
          {filterItems.map(item => (
            <button
              key={item.id}
              className="flex items-center text-gray-600 hover:text-teal-600 w-full px-3 py-2 rounded-md transition-colors hover:bg-gray-50"
            >
              <span className="mr-3 text-gray-400">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortBy;