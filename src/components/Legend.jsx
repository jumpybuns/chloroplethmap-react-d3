import React from "react";

const Legend = ({ legendItems }) => {
  console.log(legendItems);
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      {legendItems.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            color: item.textColor,
            height: "10vh",
            fontWeight: "bolder",
            fontSize: "0.75rem",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
export default Legend;
