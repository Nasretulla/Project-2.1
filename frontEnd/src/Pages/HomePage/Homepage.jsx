import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainCity from "../../Components/MainCity/MainCity";
import MainMap from "../../Components/MainMap/MainMap";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <MainCity />
      <MainMap />
      <Footer />
    </>
  );
}
