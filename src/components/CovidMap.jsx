import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";

const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
  };

  return (
    <div className="container">
      <h1 className="title"> Click Country to See Number of Confirmed COVID-19 Cases</h1>
      <MapContainer style={{ height: "75vh" }} zoom={2} center={[20, 0]}>
        <GeoJSON
          data={countries}
          style={mapStyle}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default CovidMap;
