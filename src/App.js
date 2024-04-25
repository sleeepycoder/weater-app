import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city.trim()) {
        const apiKey = 'b878f11ab67017090468e6e381857ccb'; // Obtain API key from OpenWeatherMap
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeather(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeatherData();
  }, [city]); // Trigger effect when 'city' state changes

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;

