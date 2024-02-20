import React from "react";
import helsinki from "../../assets/images/helsinki.jpg";
import espoo from "../../assets/Espoo/espoo.jpg";
import vantaa01 from "../../assets/images/vantaa01.jpg";
import Weather from "../../Components/Weather/Weather";

import "./MainCity.css";
import { Link } from "react-router-dom";

const infoMainCity = [
  { id: 1, name: "HELSINKI", url: helsinki, addres: "Helsinki" },
  { id: 2, name: "ESPOO", url: espoo, addres: "Espoo" },
  { id: 3, name: "VANTAA", url: vantaa01, addres: "Vantaa" },
];

export default function MainCity() {
  return (
    <>
      <div class="container">
        <div className="row">
          <Weather />
        </div>

        {infoMainCity.map((city) => (
          <>
            <div className="row container-homepage-city">
              <div className="col-md-6 g-5" main-city-box>
                <div class="card">
                  <Link to={`/city/${city.addres}/${1}`}>
                    <img
                      class="card-img-top odd"
                      src={city.url}
                      alt="Card image cap"
                    />
                    <h5 class="card-title">{city.name}</h5>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 description-city">
                <h1>{city.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                  sequi placeat voluptas deserunt fugit quisquam numquam enim et
                  autem, maiores quibusdam repellendus tempora tempore quia cum
                  dicta earum vero asperiores.
                  <Link to={`/city/${city.addres}/${1}`}>
                    <span className="btn-city">KATSO PAIKKALLE</span>{" "}
                  </Link>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
