import React from "react";
import { createPortal } from "react-dom";


import "./ShowMorInfo.css";

export default function ShowMorInfo({ closeModalShowInfo, children }) {
  return (
    <>
      {createPortal(
        <div className="modal-parent active ">
          {children}
        </div>,
        document.getElementById("modal-parents")
      )}
    </>
  );
}
