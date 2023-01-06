import { Link } from "react-router-dom";
import { i18n } from "../constants/i18n-ES";
import federacionNacionalDeCafeteros from "../assets/images/federacionNacionalDeCafeteros.png";
import "./styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">
          <img src={federacionNacionalDeCafeteros}></img>
          <span>{i18n.title}</span>
        </Link>
      </h1>
    </header>
  );
};
