import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Map from "../../Components/Map/Map";
import MainCity from "../../Components/MainCity/MainCity";
import MapTesti from "../../Components/Maptesti/MapTesti";

import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <MainCity />
      <MapTesti />
      <Footer />
    </>
  );
}
