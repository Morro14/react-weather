import axios from "axios";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";
import "../styles/WeatherMain.css";

const APIkey = "57d7d2706f95a49a7f8cccacc459e943";

function WeatherMain() {
  let [location, setLocation] = useState([]);
  if (location.length === 0) {
    navigator.geolocation.getCurrentPosition((geoPos) =>
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${geoPos.coords.latitude}&lon=${geoPos.coords.longitude}&limit=1&appid=${APIkey}`
        )
        .then((res) => {
          setLocation(res.data[0]);
        })
    );
  } else {
    return (
      <>
        <h1>{location.name}</h1>
        <Forecast className="forecast-container" name={location.name} country={location.country} apikey={APIkey}></Forecast>
        {/* <CurrentWeather className="weather-container" name={location.name} country={location.country} apikey={APIkey}/> */}
      </>
    );
  }
}

export default WeatherMain;
