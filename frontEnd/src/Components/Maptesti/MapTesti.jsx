import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import Search from "../Search/Search";
import L from "leaflet";

// get icon***********************
const icon = L.icon({
  iconUrl: "./location.png",
  iconSize: [50, 50],
});
const position = [60.1699, 24.9384];

// reset Location *******************

function ResetCenterView({ selectPosition }) {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(
          Number(selectPosition?.latitude),
          Number(selectPosition?.longitude)
        ),
        map.getZoom(),
        { animate: true }
      );
    }
  }, [selectPosition]);
}

export default function MapTesti() {
  const [selectPosition, setSelectPosition] = useState(null);
  const showLocatinSelect = [
    Number(selectPosition?.latitude),
    Number(selectPosition?.longitude),
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
              <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=OUnf3XcAdp7un26iP20W" />

              {selectPosition && (
                <Marker position={showLocatinSelect} icon={icon}>
                  <Popup>
                    <h1 style={{fontWeight:'800', fontSize:'2rem'}}>{selectPosition.address_city_fi}</h1>
                    <h2 style={{fontWeight:'800', fontSize:'2rem'}}>{selectPosition.name_fi }</h2>
                  </Popup>
                </Marker>
              )}
              <ResetCenterView selectPosition={selectPosition} />
            </MapContainer>
          </div>

          <div className="col-md-6">
            <Search
              selectPosition={selectPosition}
              setSelectPosition={setSelectPosition}
            />
          </div>
        </div>
      </div>
    </>
  );
}
