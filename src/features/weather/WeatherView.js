import React from "react";
import { useSelector } from "react-redux";

const WeatherView = () => {
  const weather = useSelector((state) => state.weather);
  // console.log("this is complete state: ", weather);
  let date = new Date().toJSON().slice(0, 10);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  return (
    <>
      {weather.loading ? (
        <div
          className="vh-100 d-flex justify-content-center"
          style={{ backgroundColor: "#cdc4f9" }}
        >
          <div className="spinner-border" role="status"></div>
        </div>
      ) : weather.isDataAvailable ? (
        <section className="vh-100" style={{ backgroundColor: "#cdc4f9" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-12 col-xl-10">
                <div
                  className="card shadow-0 border border-dark border-5 text-dark"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="card-body p-4">
                    <div className="row text-center">
                      <div
                        className="col-md-9 text-center border-end border-5 border-dark py-4"
                        style={{
                          marginTop: "-1.5rem",
                          marginBottom: "-1.5rem",
                        }}
                      >
                        <div className="d-flex justify-content-around mt-3">
                          <p className="small">{weather.data.name}</p>
                          <p className="small">{date}</p>
                          <p className="small">Rain map</p>
                        </div>
                        <div className="d-flex justify-content-around align-items-center py-5 my-4">
                          <p
                            className="fw-bold mb-0"
                            style={{ fontSize: "7rem" }}
                          >
                            {~~(weather.data.main.temp - 273.15)}°C
                          </p>
                          <div className="text-start">
                            {/* <p className="small">10:00</p> */}
                            <p className="h3 mb-3">{day}</p>
                            <p className="small mb-0">
                              {weather.data.weather[0].description}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center mb-3">
                          <div className="flex-column">
                            <i className="fas fa-minus"></i>
                          </div>
                          <div
                            className="flex-column border"
                            style={{ bordeRadius: "10px", padding: ".75rem" }}
                          >
                            <p className="small mb-1">Sun</p>
                            <p className="small mb-0">
                              <strong>-4°C</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small mb-1">Mon</p>
                            <p className="small mb-0">
                              <strong>-4°C</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small mb-1">Tue</p>
                            <p className="small mb-0">
                              <strong>-4°C</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small mb-1">Wed</p>
                            <p className="small mb-0">
                              <strong>-4°C</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small mb-1">Thu</p>
                            <p className="small mb-0">
                              <strong>-4°C</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small mb-1">Fri</p>
                            <p className="small mb-0">
                              <strong>-4°C</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small mb-1">Sat</p>
                            <p className="small mb-0">
                              <strong>-4°C</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <i className="fas fa-minus"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 text-end">
                        <p className="small mt-3 mb-5 pb-5">For a month</p>
                        <p className="pb-1">
                          <span className="pe-2">11:00</span>{" "}
                          <strong>-4°</strong>
                        </p>
                        <p className="pb-1">
                          <span className="pe-2">12:00</span>{" "}
                          <strong>-4°</strong>
                        </p>
                        <p className="pb-1">
                          <span className="pe-2">13:00</span>{" "}
                          <strong>-5°</strong>
                        </p>
                        <p className="pb-1">
                          <span className="pe-2">14:00</span>{" "}
                          <strong>-7°</strong>
                        </p>
                        <p className="pb-1">
                          <span className="pe-2">15:00</span>{" "}
                          <strong>-6°</strong>
                        </p>
                        <p className="pb-1">
                          <span className="pe-2">16:00</span>{" "}
                          <strong>-4°</strong>
                        </p>
                        <p>
                          <span className="pe-2">17:00</span>{" "}
                          <strong>-3°</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div
          className="vh-100 d-flex justify-content-center"
          style={{ backgroundColor: "#cdc4f9" }}
        ></div>
      )}
    </>
  );
};

export default WeatherView;
