import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import UserAboutus from "../../Components/UserAboutus/UserAboutus";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../../images/Helsinki/bayo.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AboutUs.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const allUsers = [
  { name: "Roya", job: "Student", des: "lorm......" },
  { name: "Ola", job: "Student", des: "lorm......testiiiiii" },
  { name: "Maria", job: "Student", des: "lorm...... is test 2222" },
  { name: "Nasrat", job: "Student", des: "lorm......" },
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
          marginTop: "-2rem",
        }}
      >
        {" "}
        <h2
          className="welcom"
          style={{
            fontSize: "5rem",
            textAlign: "center",
            color: "white",
            padding: "10rem",
          }}
        >
          Welcom to our page
        </h2>
        <div className="container box-aboutus"></div>
        <div className="container mt-5 mb-5">
          <div className="row g-2">
            <Swiper
              loop={true}
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
              style={{ marginTop: "8rem", borderRadius: "20px 20px" }}
            >
              {users.map((user) => (
                <SwiperSlide>
                  <UserAboutus {...user} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}