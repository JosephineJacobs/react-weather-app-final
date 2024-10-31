import React from "react";
import "./Weather.css";
import weatherIcon from "./WeatherIcons/cloud.png";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="search-box">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
            <input type="submit" 
            value="Search" 
            className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Singapore</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li> Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src={weatherIcon} alt="Mostly Cloudy" />
        </div>
        <span> trying to fix 6</span>

        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
