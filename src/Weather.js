import React from "react";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      descripton: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

function search() {

  const apiKey ="be81f193e065bf5feb2d944c7336968b";
  let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then (handleResponse);

function handleSubmit(event){
  event.preventDefault();
  search();
}


function handleCityChange(event) {
  setCity (event.target.value);

}
if (weatherData.ready) {

return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            </div>
            <div className="col=3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

    <WeatherInfo data ={weatherData} />
    <WeatherForecast coordinates={weatherData.coordinates} />   
    </div>
);
} else {
  search();
  return "Loading...";   
}
}
}
