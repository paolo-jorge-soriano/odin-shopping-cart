import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import "../styles/App.css";
import storeLogo from "../assets/img/store-logo.svg";
import cartIcon from "../assets/img/cart-black-icon.svg";
import favoriteIcon from "../assets/img/favorite-icon.svg";
import searchIcon from "../assets/img/search-icon.svg";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={storeLogo} alt="store-logo" />
          </Link>
        </div>

        <nav className="nav-container">
          <Link to="men" className="nav-link">
            <p>MEN</p>
          </Link>

          <Link to="women" className="nav-link">
            <p>WOMEN</p>
          </Link>

          <Link to="jewelry" className="nav-link">
            <p>JEWELRY</p>
          </Link>
        </nav>

        <div className="user-tools">
          <img src={searchIcon} alt="search-icon" />
          <img src={favoriteIcon} alt="favorite-icon" />
          <Link to="/cart" className="cart-link">
            <img src={cartIcon} alt="cart-icon" />
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </header>

      <main className="main">
        <Outlet context={{ cart, addToCart }} />
      </main>
    </div>
  );
}
