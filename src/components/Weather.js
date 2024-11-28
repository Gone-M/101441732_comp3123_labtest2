import React from "react";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <p className="text-muted">Enter a city to get weather details.</p>;
  }

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="card text-center">
      <div className="card-body">
        <h2 className="card-title">Weather in {name}</h2>
        <p className="card-text">
          <strong>Temperature:</strong> {main.temp}°C
        </p>
        <p className="card-text">
          <strong>Condition:</strong> {weather[0].description}
        </p>
        <p className="card-text">
          <strong>Feels Like:</strong> {main.feels_like}°C
        </p>
        <p className="card-text">
          <strong>Humidity:</strong> {main.humidity}%
        </p>
        <p className="card-text">
          <strong>Wind Speed:</strong> {wind.speed} m/s
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      </div>
    </div>
  );
};


export default Weather;
