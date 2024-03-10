import axios from "axios";
import { useState } from "react";
import "../styles/Forecast.css";


function Forecast(props) {
    const [forecast, setForcast] = useState([]);



    if (forecast.length === 0 || props.city !== forecast.city.name) {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/forecast?q=${props.city},${props.country}&appid=${props.apikey}&units=metric`
            )
            .then((res) => {
                setForcast(res.data);
            });
    }
    if (forecast.length === 0) {return (
        <><p>loading...</p></>
    )}
    const getDate = (day) => {
        let date = new Date(day.dt * 1000);
        let dateFormatted = date.toDateString();
        return (dateFormatted)
    }

    const title = `Forecast for ${forecast.city.name}, ${forecast.city.country}`;

    return (
        <div className="forecast-container">
            <h1 className="forecast-title">{title}</h1>
            <div className="forecast-results">
                {forecast.list.slice(0, 5).map((day) => (

                    <div className="forecast-day-container" key={day.dt_txt}>
                        <div className="forecast-icon-container">
                            <img
                                alt="weather-icon"
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                            ></img>
                        </div>
                        <p>{getDate(day)}</p>
                        <h4>{day.weather[0].description}</h4>
                        <div className="forecast-table-container">
                            <table className="forecast-table">
                                <tbody>
                                    <tr>
                                        <td>{day.main.temp} °C</td>
                                    </tr>
                                    <tr>
                                        <td>Wind: {day.wind.speed} m/s</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Forecast;
