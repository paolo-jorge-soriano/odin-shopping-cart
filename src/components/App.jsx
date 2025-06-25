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
          <img src={storeLogo} alt="store-logo" />
          <h1>Thrift Shop</h1>
        </div>

        <nav className="nav-container">
          <Link to="/">Home</Link>
          <Link to="men">Men</Link>
        </nav>

        <div className="user-tools">
          <img src={cartIcon} alt="cart-icon" />
        </div>
      </header>
      <Outlet />
    </>
  );
}
