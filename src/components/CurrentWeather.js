import axios from "axios";
import { useState } from "react";
import "../styles/CurrentWeather.css";


function CurrentWeather(props) {
    const [weather, setWeather] = useState([]);

    

    if (props.city !== weather.name) {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&appid=${props.apikey}&units=metric`
            )
        .then((res) => {

            setWeather(res.data);



        });
        

    }
    if (weather.length === 0) {return (
        <><p>loading... </p></>
    )}
    
    const title = `${weather.name}, ${weather.sys.country}`;
    const date = new Date(weather.dt * 1000);
    const dateFormatted = date.toDateString();
    if (weather.length === 0) {
        return (
            <><p>loading...</p></>
        )
    }

    return (
        <div className="current-weather-container">
            <h1>{title}</h1>
            <div className="current-weather-icon-container">
                <img
                    alt="weather-icon"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                ></img>
            </div>
            <p>{dateFormatted}</p>
            <h4>{weather.weather[0].description}</h4>
            <div className="current-weather-table-container">
                <table className="current-weather-table">
                    <tbody>
                        {/* <tr><td>{weather.data.countries.Tbilisi.temp}</td></tr> */}
                        <tr><td>{weather.main.temp} °C</td></tr>
                        <tr><td>Wind: {weather.wind.speed} m/s</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );


}
export default CurrentWeather;
