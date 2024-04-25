import React, { useState, useRef } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const inputRef = useRef(null);

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter city name..."
        className="border p-2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSearch}>
        Search
      </button>
      {/* <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={focusInput}>
        Focus Input
      </button> */}
    </div>
  );
};

export default SearchBar;

