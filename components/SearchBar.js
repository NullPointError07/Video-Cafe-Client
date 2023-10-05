"use client";

import React, { useState } from "react";

const SearchBar = ({ searchFunc, onSort }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(""); // sorting functionality

  const handleSearch = () => {
    searchFunc(searchQuery);
  };

  const handleSort = () => {
    // Call the onSort function with the selected sorting option (sortBy)
    onSort(sortBy);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-200 px-10 lg:px-20 text-black">
      <div className="flex items-center space-x-4 ">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <div className="flex items-center space-x-4 hidden">
        <span>Sort By:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-md"
        >
          {/* Define sorting options here */}
          <option value="">Select Option</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
          {/* Add more options as needed */}
        </select>
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
