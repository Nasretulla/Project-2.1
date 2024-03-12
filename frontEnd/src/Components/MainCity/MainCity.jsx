import React, { useContext } from "react";
import Weather from "../../Components/Weather/Weather";
import AuthContext from "../../context/authContext";
import infoMainCity from "../../Utils/infoCitys";

import "./MainCity.css";
import { Link, useNavigate } from "react-router-dom";

export default function MainCity() {
  const authContect = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <Weather />
        </div>

        {infoMainCity.map((city) => (
          <>
            <div key={city.id} className="row container-homepage-city">
              <div className="col-md-6 g-5" main-city-box>
                <div className="card">
                  <Link to={`/city/${city.addres}/${1}`}>
                    <img
                      className="card-img-top odd"
                      src={city.url}
                      alt="Card image cap"
                    />
                    <h5 className="card-title">{city.name}</h5>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 description-city">
                <h1>{city.name}</h1>
                <p style={{ textAlign: "justify", fontSize: "15px" }}>
                  {city.dec}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
