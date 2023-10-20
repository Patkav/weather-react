import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form id="search-form">
        <label for="Search"></label>
        <input
          id="city-input"
          type="search"
          placeholder="Search"
          autocomplete="off"
        />
        <input id="search" type="submit" />
      </form>
      <h1>New York 🗽</h1>
      <div>
        <div class="row align-items-start">
          <div class="col">
            <h4>Last Updated: Thursday 9:23 PM</h4>
            <h4>Description: Clear Skies</h4>
          </div>
          <div class="col">
            <h3>12°C | 58°F</h3>
          </div>
          <div class="col">
            <h4>
              Humidity: 28%
              <br />
              Wind: 13 km/hr
            </h4>
          </div>
        </div>
      </div>
      <div>
        <small>
          <a href="https://github.com/Patkav/weather-react">open-source code</a>
          , by Patricia Kavanaugh
        </small>
      </div>
    </div>
  );
}
