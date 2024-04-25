import React from 'react';

const WeatherCard = ( {weather} ) => {
  // console.log(weather);

  return (
    <div className="border bg-red-200 p-4 m-4 w-[290px] rounded-lg ">
      <h2 className="text-xl font-bold">{weather?.name}</h2>
      <p>Temperature: {weather?.main?.temp}°C</p>
      <p>Humidity: {weather?.main?.humidity}%</p>
      <p>Wind Speed: {weather?.wind?.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
