

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import useApi from './hooks/useApi';

const App = () => {
  const [city, setCity] = useState('');
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2d9c58f0e233ce0015ecfacb6cc0765c`;
  const { data, loading, error } = useApi(apiUrl);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center my-44">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <WeatherCard weather={data} />}
    </div>
  );
};

export default App;
