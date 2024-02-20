import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import Search from "../Search/Search";

import "leaflet/dist/leaflet.css";

import "./Map.css";

export default function newMap() {
  // markers
  const markers = [
    {
      geocode: [60.19, 24.96],
      popUp: "Hello, I am pop up 1",
    },
    // {
    //   geocode: [60.14, 24.94],
    //   popUp: "Hello, I am pop up 2",
    // },
    {
      geocode: [60.17, 24.95],
      popUp: "Hello, I am pop up 3",
    },
  ];
  const costumIcon = new Icon({
    iconUrl: "https://www.flaticon.com/free-icon/location-pin_2776000",
    iconSize: [38, 38], // size of the icon
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <MapContainer center={[60.192059, 24.945831]} zoom={13}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {markers.map((marker) => (
                <Marker position={marker.geocode}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className="col-md-5">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}
