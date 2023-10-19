import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" class="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100 "
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>New York</h1>
            <ul>
              <li id="description"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Clear"
                  className="float-left"
                  id="icon"
                />
                <div className="float-left">
                  <strong id="temperature"></strong>
                  <div className="units">
                    °C | <a href="#">℉</a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <div id="humidity"></div>%
                  </li>
                  <li>
                    Wind: <div id="wind"></div> km/h
                  </li>
                </ul>
              </div>
            </div>

            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>

        <small>
          <a href="https://github.com/Patkav/weather-react">open-source code</a>
          , by Patricia Kavanaugh
        </small>
      </div>
    </div>
  );
}
