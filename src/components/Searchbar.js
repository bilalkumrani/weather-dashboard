import React from "react";
import { Fragment } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weather/weatherSlice";
const Searchbar = (props) => {
  const { handleSearch, options, isLoading, cityData } = props;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCityData = () => {
    dispatch(fetchWeather(cityData[0]));
  };
  const filterBy = () => true;
  console.log(options);
  return (
    <div className="d-flex">
      <AsyncTypeahead
        filterBy={filterBy}
        id="async-example"
        isLoading={isLoading}
        labelKey="name"
        minLength={3}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for city..."
        renderMenuItemChildren={(option, props) => (
          <Fragment>
            <span>{option.name}</span>
          </Fragment>
        )}
      />
      <svg
        onClick={handleCityData}
        style={{ height: "50px", padding: "10px", marginTop: "2px" }}
        xmlns="http://www.w3.org/2000/svg"
        className=" mx-2 border border-dark h-6 w-6 rounded"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default Searchbar;
