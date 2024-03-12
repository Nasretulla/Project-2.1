import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import OneBoxForCity from "../../Components/OneBoxForCity/OneBoxForCity";
import TitleforSection from "../../Components/TitleforSection/TitleforSection";
import Pagination from "../../Components/Pagination/Pagination";
import { VscTriangleDown } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

import "./City.css";
import { useParams } from "react-router-dom";

export default function City() {
  const { adres } = useParams();
  const [allLocation, setAlllocation] = useState([]);
  const [orderLocation, setOrderlocation] = useState([]);
  const [shownLocation, setShownLocation] = useState([]);
  const [status, setStatus] = useState("default");
  const [statusTitle, setStatusTitle] = useState("JÄRJESTÄÄ");
  const [searchValue, setSearchValue] = useState("");

  //=>******************************** api get from this web https://api.hel.fi/linkedevents/v1/
  useEffect(() => {
    fetch(`https://www.hel.fi/palvelukarttaws/rest/v4/unit/?ontologyword=473`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const choseCity = data.filter((city) => city.address_city_fi === adres);
        setAlllocation(choseCity);
        setOrderlocation(choseCity);
      });
  }, []);

  useEffect(() => {
    switch (status) {
      case "puisto": {
        const placePuisto = allLocation.filter((place) =>
          place.name_fi.includes("puisto")
        );
        setOrderlocation(placePuisto);
        break;
      }

      case "kirjasto": {
        const placeKirjasto = allLocation.filter((place) =>
          place.name_fi.includes("kirjasto")
        );
        setOrderlocation(placeKirjasto);
        break;
      }

      case "museo": {
        const placeMuseo = allLocation.filter((place) =>
          place.name_fi.includes("museo")
        );
        setOrderlocation(placeMuseo);
        break;
      }
      case "kirkko": {
        const placeKirkko = allLocation.filter((place) =>
          place.name_fi.includes("kirkko")
        );
        setOrderlocation(placeKirkko);
        break;
      }

      default: {
        setOrderlocation(allLocation);
      }
    }
  }, [status]);

  const statusChangeHandeler = (event) => {
    setStatusTitle(event.target.textContent);
  };

  const searchValueChangeHandeler = (event) => {
    setSearchValue(event.target.value);
    const filterPlace = allLocation.filter((place) =>
      place.name_fi.includes(event.target.value)
    );
    setOrderlocation(filterPlace);
  };

  return (
    <>
      <Navbar />

      <TitleforSection title={adres} />

      <div className="container">
        <div className="row category-section">
          <div className="col-md-6">
            <div className="courses-top-bar__left">
              <form action="#" className="courses-top-bar__form">
                <FaSearch className="courses-top-bar__search-icon" />
                <input
                  type="text"
                  className="courses-top-bar__input"
                  value={searchValue}
                  onChange={searchValueChangeHandeler}
                />
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="courses-top-bar__selection">
              <span className="courses-top-bar__selection-title">
                <VscTriangleDown className="courses-top-bar__selection-icon" />
                {statusTitle}
              </span>
              <ul className="courses-top-bar__selection-list">
                <li
                  className="courses-top-bar__selection-item"
                  onClick={(event) => {
                    setStatus("default");
                    statusChangeHandeler(event);
                  }}
                >
                  NÄHTÄVYYDET
                </li>
                <li
                  className="courses-top-bar__selection-item "
                  onClick={(event) => {
                    setStatus("puisto");
                    statusChangeHandeler(event);
                  }}
                >
                  PUISTO
                </li>
                <li
                  className="courses-top-bar__selection-item "
                  onClick={(event) => {
                    setStatus("kirjasto");
                    statusChangeHandeler(event);
                  }}
                >
                  KIRJASTO
                </li>
                <li
                  className="courses-top-bar__selection-item "
                  onClick={(event) => {
                    setStatus("museo");
                    statusChangeHandeler(event);
                  }}
                >
                  MUSEO
                </li>
                <li
                  className="courses-top-bar__selection-item "
                  onClick={(event) => {
                    setStatus("kirkko");
                    statusChangeHandeler(event);
                  }}
                >
                  KIRKKO
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container box-all-city">
        <div className="row box-alert">
          {shownLocation.length === 0 ? (
            <>
              <div className="alert alert-light">
                Etsityllä sanalla ei löytynyt mitään paikkaa.
              </div>
            </>
          ) : (
            <>
              {shownLocation.reverse().map((item) => (
                <OneBoxForCity {...item} />
              ))}
            </>
          )}
          <Pagination
            items={orderLocation}
            itemsCount={8}
            pathname={`/city/${adres}`}
            setShownLocation={setShownLocation}
            shownLocation={shownLocation}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
