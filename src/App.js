
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = 'b878f11ab67017090468e6e381857ccb'; // Obtain API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="container  bg-gray-400 border rounded-xl w-1/3 mx-96 flex flex-col p-4 items-center my-40 ">
      <h1 className="text-3xl font-bold mb-4 ">Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeatherData} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
