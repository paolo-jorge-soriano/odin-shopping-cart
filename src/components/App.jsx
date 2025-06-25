import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import "../styles/App.css";
import storeLogo from "../assets/img/store-logo.svg";
import cartIcon from "../assets/img/cart-black-icon.svg";

export default function App() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={storeLogo} alt="store-logo" />
          </Link>
        </div>

        <nav className="nav-container">
          <Link to="men" className="nav-link">
            MEN
          </Link>

          <Link to="women" className="nav-link">
            WOMEN
          </Link>
        </nav>

        <div className="user-tools">
          <img src={cartIcon} alt="cart-icon" />
        </div>
      </header>

      <Outlet />
    </>
  );
}
