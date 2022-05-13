import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

import { useState } from "react";
import WeatherView from "./features/weather/WeatherView";

function App() {
  const [isLoading, setIsloading] = useState(false);
  const [cityList, setCityList] = useState([]);

  const handleSearch = (query) => {
    setIsloading(true);
    // console.log(query);

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=4a113fcfd770cc13cb50c8dcb21231ce`
    )
      .then((resp) => resp.json())
      .then((res) => {
        const options = res.map((city) => {
          return { name: city.name, lat: city.lat, lon: city.lon };
        });
        setCityList(options);
        setIsloading(false);
        // console.log(options);
      });
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#cdc4f9" }}>
        <div className="row">
          <Navbar />

          <div className="col-3 mt-4">
            <Searchbar
              handleSearch={handleSearch}
              options={cityList}
              isLoading={isLoading}
              cityData={cityList}
            />
          </div>
          <div className="col-8 mt-4">
            <WeatherView />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
