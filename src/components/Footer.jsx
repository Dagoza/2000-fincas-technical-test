import React from "react";
import { i18n } from "../constants/i18n-ES";
import "./styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">{i18n.title}</p>
      <p className="footer-copy">{i18n.copy}</p>
    </footer>
  );
};
