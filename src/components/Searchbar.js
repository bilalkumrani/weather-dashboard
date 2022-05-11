import React from "react";
const Searchbar = () => {
  return (
    <div className="d-flex" style={{ height: "50px" }}>
      <input className="form-control" placeholder="Enter city name" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-1 w-1 p-2 bg-dark text-white"
        style={{ width: "60px", cursor: "pointer  " }}
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
