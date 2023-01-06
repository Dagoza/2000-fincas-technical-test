import { Link } from "react-router-dom";
import { i18n } from "../constants/i18n-ES";
import "./styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/"> {i18n.title}</Link>
      </h1>
    </header>
  );
};
