import React from "react";
import { RiEmotionHappyLine } from "react-icons/ri";

import "./TitleforSection.css";

export default function TitleforSection({ title }) {
  return (
    <>
      <div className="container title-box">
        <h1 className="title-for-sectiens">Kaupunki: {title}</h1>
      </div>
      {/* <div className="container box titel-back">

      </div> */}
    </>
  );
}
