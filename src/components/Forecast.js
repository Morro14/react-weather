import React from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/Forcast.css";


function Forecast(props) {
  const [forcast, setForcast] = useState([]);
  if (forcast.length === 0) {
    
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${props.name},${props.country}&appid=${props.apikey}&units=metric`
      )
      .then((res) => {
        setForcast(res.data.list.slice(0, 5));
      });
  } else {
    console.log(forcast);
    return (
      <div className="forecast-container">
        {forcast.map((day) => (
          <div className="weather-container" key={day.dt_txt}>
            <div className="weather-icon-container">
              <img
                alt="weather-icon"
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
              ></img>
            </div>

            <h4>{day.weather[0].description}</h4>
            <div className="weather-day">
              <table className="weather-table">
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
    );
  }
}

export default Forecast;
