import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, main, wind } = weather;

  return (
    <div className="border bg-red-200 p-4 m-4 w-[290px] rounded-lg ">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
