import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer footer-widgets">
        <div className="socialMedia">
          <FaInstagram />
          <CiTwitter />
          <CiFacebook />
          <CiLinkedin />
        </div>
        <p> &copy; 2024 HelloFinland.com</p>
      </div>
    </>
  );
}
