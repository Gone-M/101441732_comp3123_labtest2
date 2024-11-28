
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import './theme.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    const apiKey = "a1eb65d003286d63ec589d98b5196573";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (err) {
      setWeatherData(null);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Weather App</h1>
          <SearchBar onSearch={handleSearch} />
          {loading && <div className="spinner-border text-primary" role="status"></div>}
          {error && <p className="text-danger">{error}</p>}
          <Weather weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default App;
