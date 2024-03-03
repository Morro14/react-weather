import React from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/Weather.css";

function CurrentWeather(props) {
  const [weather, setWeather] = useState([]);
  if (weather.length === 0) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.name},${props.country}&appid=${props.apikey}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
      });
  } else {

    return (
      <>
        <div className="weather-icon-container">
          <img
            alt="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          ></img>
        </div>
        <h4>{weather.weather[0].description}</h4>
        <div className="weather-day">
            
        <table className="weather-table">
          <tbody>
            <tr><td>{weather.main.temp} °C</td></tr>
            <tr><td>Wind: {weather.wind.speed} m/s</td></tr>
          </tbody>
        </table>
        </div>
      </>
    );
  }
}

export default CurrentWeather;
