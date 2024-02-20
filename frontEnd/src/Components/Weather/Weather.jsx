import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../Weather/Weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=95701fd1b7ad924d1ab951c10a9aa016"
        );

        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };
    const intervalId = setInterval(updateCurrentTime, 1000);

    fetchWeatherData();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to convert kelvin to Celsius
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  const getIconUrl = (iconCode) =>
    `http://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching weather data</p>}
      {weatherData && (
        <div className="main-weather">
          {/* {weatherData.weather[0].icon && (
            <img
              className="img"
              src={getIconUrl(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
            />
          )} */}
          <p className="temp">
            {kelvinToCelsius(weatherData.main.temp).toFixed(2)} °C
          </p>

          {/* <p className="header-weather">{weatherData.name}:</p> */}
          {/* <p className="description">{weatherData.weather[0].description}</p> */}

          <p className="day">
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
