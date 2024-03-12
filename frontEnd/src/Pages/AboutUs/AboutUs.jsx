import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import UserAboutus from "../../Components/UserAboutus/UserAboutus";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../../images/pic.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AboutUs.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const allUsers = [
  {
    name: "Roya",
    job: "",
    des: "",
  },
  { name: "Ola", job: "Koodari", des: "" },
  { name: "Maria", job: "koodari", des: "" },
  {
    name: "Nasrat",
    job: "Koodari",
    des: "",
  },
];

export default function AboutUs() {
  const [users, setUsers] = useState(allUsers);

  return (
    <>
      <Navbar />
      <article
        className="style.article"
        style={{
          backgroundImage: `url(${image})`,
          height: "80rem",
          backgroundSize: "cover",
          marginTop: "-4rem",
        }}
      >
        {" "}
        <div className="container">
          <h2
            className="welcom"
            style={{
              fontSize: "5rem",
              color: "black",
              padding: "5rem",
            }}
          >
            Ryhmä A
          </h2>
          <p className="part1">
            Toteutimme tämän koulun ryhmäprojektin Rambolille. Projektissa
            hyödynsimme monipuolisesti erilaisia teknologioita, kuten Reactia,
            Bootstrapia ja MongoDB:tä tietokantana. Backendin toteutuksessa
            käytimme Node.js:ää ja Expressiä. Käyttöliittymän toteutuksessa
            hyödynsimme Swipe- ja Swael-kirjastoja, kun taas
            Leaflet-karttakirjastoa käytettiin karttojen luomiseen.
          </p>
        </div>
        <div className="container">
          <div className="row members">
            <div className="jäsenet">Ryhmän jäsenet</div>
            <div className="col-md-2 box-person">Roya</div>
            <div className="col-md-2 box-person">Nusrat</div>
            <div className="col-md-2 box-person">Marija</div>
            <div className="col-md-2 box-person">Olla</div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row g-2"></div>
        </div>
      </article>
      <Footer />
    </>
  );
}
