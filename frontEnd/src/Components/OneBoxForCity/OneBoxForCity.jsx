import React, { useState } from "react";
import helsinki from "../../assets/Helsinki/helsinki.jpg";
import espoo from "../../assets/Espoo/espoo.jpg";
import vantaa from "../../assets/Vantaa/vantaa.jpg";
import ShowMorInfo from "../ShowMorInfo/ShowMorInfo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { HiLibrary } from "react-icons/hi";
import { MdDescription } from "react-icons/md";
import noimage from "../../assets/images/noimage.jpg";
import Map from "../../Components/Map/Map";

import "./OneBoxForCity.css";
import { Button } from "react-bootstrap";
export default function OneBoxForCity(props) {
  const [showMordetails, setShowMordetails] = useState(false);
  const [infoAtModal, setInfoAtModal] = useState({});
  const [showFullText, setShowFullText] = useState(false);
  const showAlltext = props.desc_fi ? props.desc_fi.slice(0, 300) : "-";
  // let imageUrl;
  // if (props.address_locality.fi === "Helsinki") {
  //   imageUrl = helsinki;
  // } else if (props.address_locality.fi === "Vantaa") {
  //   imageUrl = vantaa;
  // } else if (props.address_locality.fi === "Espoo") {
  //   imageUrl = espoo;
  // }

  const closeModalShowInfo = () => {
    setShowMordetails(false);
  };

  return (
    <>
      <div class="col-md-3 g-3">
        <div class="product-grid">
          <div class="product-image">
            <img
              className="content-image"
              src={
                props.picture_url
                  ? props.picture_url
                  : props.address_city_fi === "Helsinki"
                  ? helsinki
                  : props.address_city_fi === "Vantaa"
                  ? vantaa
                  : props.address_city_fi === "Espoo"
                  ? espoo
                  : noimage
              }
            />
          </div>
          <div class="product-content">
            <h3
              onClick={() => {
                setShowMordetails(true);
                setInfoAtModal(props);
              }}
              class="title"
            >{`PAIKA: ${props.name_fi.slice(0, 20)}`}</h3>
            <h3 class="title">NÄYTTÄ MAP</h3>
          </div>

          {/* new Style */}
          {/* <a className="show-city-link">
            <div class="content-overlay"></div>
            <img
              class="content-image"
              src={
                props.picture_url
                  ? props.picture_url
                  : props.address_city_fi === "Helsinki"
                  ? helsinki
                  : props.address_city_fi === "Vantaa"
                  ? vantaa
                  : props.address_city_fi === "Espoo"
                  ? espoo
                  : ""
              }
            />
            <div class="content-details fadeIn-bottom">
              <h3
                class="content-title"
                onClick={() => {
                  setShowMordetails(true);
                  setInfoAtModal(props);
                }}
              >
                {props.name_fi}
              </h3>
              <p class="content-text">
                <i class="fa fa-map-marker"></i>
                {props.address_city_fi}
              </p>
            </div>
          </a> */}
        </div>
      </div>

      {showMordetails && (
        <ShowMorInfo closeModalShowInfo={closeModalShowInfo}>
          <div className="container">
            <div className="row bg-modal">
              <div className="col-6">
                <img
                  src={
                    props.picture_url
                      ? props.picture_url
                      : props.address_city_fi === "Helsinki"
                      ? helsinki
                      : props.address_city_fi === "Vantaa"
                      ? vantaa
                      : props.address_city_fi === "Espoo"
                      ? espoo
                      : ""
                  }
                  className="img-modal"
                />
              </div>
              <div className="col-6 ul-show-Info">
                <ul>
                  <h1>{props.name_fi}</h1>
                </ul>
                <ul>
                  <li style={{ fontWeight: 900 }}>
                    <HiLibrary /> {props.address_city_fi}
                  </li>
                  <li>
                    <MdEmail /> {"  "}
                    {props.email ? props.email : "-"}
                  </li>
                  <li>
                    <FaPhoneSquare />
                    {"  "}{" "}
                    {props.accessibility_phone
                      ? props.accessibility_phone
                      : "-"}
                  </li>
                  <li>
                    <CgWebsite /> {"  "}
                    <a href={`${props.www_en}`}>Click Tällä </a>
                  </li>
                  <li className="description">
                    <FaLocationDot />
                    {props.street_address_fi ? props.street_address_fi : "-"}
                  </li>
                  <li>
                    <MdDescription />
                    {showFullText ? props.desc_fi : showAlltext}
                  </li>
                  {props.desc_fi && props.desc_fi.length > 300 && (
                    <Button onClick={() => setShowFullText(!showFullText)}>
                      {showFullText ? "VÄHÄÄN" : "LISÄÄ TEXTI"}
                    </Button>
                  )}
                </ul>
                <button
                  className="btn btn-secondary btn-info-modal"
                  onClick={() => closeModalShowInfo()}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </ShowMorInfo>
      )}
    </>
  );
}
