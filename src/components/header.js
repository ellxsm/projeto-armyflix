import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logo} className="header__logo" alt="logo" />
      <nav>
        <ul className="header__btn">
          <li>
            <Link to="/">Home <i className="fa-solid fa-house"></i></Link>
          </li>
          <li>
            <Link to="/pages/video.js">Novo Vídeo <i className="fa-solid fa-plus"></i></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
