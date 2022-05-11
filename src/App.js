import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Weatherreport from "./components/WeatherReport";

function App() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#cdc4f9" }}>
        <div className="row">
          <Navbar />

          <div className="col-3 mt-4">
            <Searchbar />
          </div>
          <div className="col-8 mt-4">
            <Weatherreport />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
