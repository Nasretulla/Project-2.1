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
import noimage from "../../assets/images/noimage.jpg";
import { Button } from "react-bootstrap";
import MapTesti from "../Maptesti/MapTesti";
import { IoReader } from "react-icons/io5";
import "./OneBoxForCity.css";

export default function OneBoxForCity(props) {
  const [showMordetails, setShowMordetails] = useState(false);
  const [infoAtModal, setInfoAtModal] = useState({});
  const [showFullText, setShowFullText] = useState(false);
  const showAlltext = props.desc_fi ? props.desc_fi.slice(0, 300) : "-";
  const [selectPosition, setSelectPosition] = useState(null);

  

  const closeModalShowInfo = () => {
    setShowMordetails(false);
  };

  return (
    <>
      <div className="col-md-3 g-3">
        <div className="product-grid">
          <div className="product-image">
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
          <div className="product-content">
            <h3
              onClick={() => {
                setShowMordetails(true);
                setInfoAtModal(props);
              }}
              className="title"
            >{`${props.name_fi.slice(0, 20)}`}</h3>
          </div>
        </div>
      </div>

      {showMordetails && (
        <ShowMorInfo closeModalShowInfo={closeModalShowInfo}>
          <div className="container">
            <div className="row bg-modal">
              <div className="col-6 section-map ">
                <MapTesti selectPosition={selectPosition} />
                <button
                  className="btn btn-secondary btn-info-modal"
                  onClick={() => closeModalShowInfo()}
                >
                  Sulje
                </button>
              </div>
              <div className="col-6 ul-show-Info">
                <ul>
                  <h1>{props.name_fi}</h1>
                </ul>
                <ul className="detail-for-city">
                  <li style={{ fontWeight: 900, cursor: "pointer" }}>
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
                    <a href={`${props.www_en}`}>Lisätietoja</a>
                  </li>
                  <li
                    onClick={() => setSelectPosition(props)}
                    style={{ cursor: "pointer" }}
                  >
                    <FaLocationDot />
                    {props.street_address_fi ? props.street_address_fi : "-"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ShowMorInfo>
      )}
    </>
  );
}
