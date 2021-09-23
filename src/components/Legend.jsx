import React from "react";
import "./CovidMap.css";

const Legend = ({ legendItems }) => {

  return (
    <div
      className="legend"
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item, index) => (
        <div
          key={index}
          style={{
            boxSizing: "content-box",
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignContent: "center",
            border: "1px solid black",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            color: item.textColor,
            height: "10vh",
            fontWeight: "bolder",
            fontSize: "0.70rem",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
export default Legend;
