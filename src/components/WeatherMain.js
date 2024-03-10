import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";
import "../styles/WeatherMain.css";
import axios from "axios";
import { useState } from "react";



function WeatherMain(props) {
    const APIkey = "57d7d2706f95a49a7f8cccacc459e943";
    const [location, setLocation] = useState(false);
    if (!location) {
        navigator.geolocation.getCurrentPosition((geoPos) => {
            axios
                .get(
                    `http://api.openweathermap.org/geo/1.0/reverse?lat=${geoPos.coords.latitude}&lon=${geoPos.coords.longitude}&limit=1&appid=${APIkey}`
                )
                .then((res) => {
                    setLocation(res.data[0]);

                })
        }
        );

    }
    if (!location) {
        return (
            <div>
                <p>loading...?</p>
            </div>
        )
    }

    let city = '';
    let country='';

    if (props.selectResults.length === 2) {
        country = props.selectResults[1][1]
        city = props.selectResults[0];


    }

    if (props.selectResults.length === 0) {

        country = location.country;
        city = location.name;
    }
    

    if (city.length !== 0 && country.length !== 0 && props.mode === "forecast") {
        return (
            <div className="weather-container">
                <Forecast city={city} country={country} apikey={APIkey}></Forecast>
            </div>
        );
    }

    if (city.length !== 0 && country.length !== 0 && props.mode === "current") {


        return (
            <div className="weather-container">
                <CurrentWeather city={city} country={country} apikey={APIkey} />
            </div>
        );
    }
}

export default WeatherMain
