import React from "react";
import "./CovidMap.css";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="loading-title">CONFIRMED COVID-19 CASES WORLDWIDE</h1>
      <img className="loading-image" src="/virus.jpg" alt="virus" />{" "}
    </div>
  );
};

export default Loading;
