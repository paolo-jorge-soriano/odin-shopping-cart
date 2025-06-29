import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import "../styles/App.css";
import storeLogo from "../assets/img/store-logo.svg";
import cartIcon from "../assets/img/cart-black-icon.svg";
import favoriteIcon from "../assets/img/favorite-icon.svg";
import searchIcon from "../assets/img/search-icon.svg";

import facebookLogo from "../assets/img/facebook-logo.svg";
import tiktokLogo from "../assets/img/tiktok-logo.svg";
import twitterLogo from "../assets/img/twitter-logo.svg";
import instagramLogo from "../assets/img/instagram-logo.svg";

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
      <header className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={storeLogo} alt="store-logo" />
            <h1>Urbane</h1>
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

      <main className="main-container">
        <Outlet context={{ cart, addToCart }} />
      </main>

      <footer className="footer-container">
        <div className="footer-top">
          <div className="footer-content link">
            <h3>About Urbane</h3>
            <p>Information</p>
            <p>Careers</p>
            <p>Sustainability</p>
            <p>Online Gift Service</p>
          </div>

          <div className="footer-content link">
            <h3>Help</h3>
            <p>FAQ</p>
            <p>Return Policy</p>
            <p>Bulk Order</p>
            <p>Accessibility</p>
          </div>

          <div className="footer-content link">
            <h3>Account</h3>
            <p>Urbane App</p>
            <p>Membership</p>
            <p>Profile</p>
            <p>Coupons</p>
          </div>

          <div className="footer-content">
            <h3>E-Newsletter</h3>
            <p>Subscribe for news on our latest arrivals, exclusive promotions, and events.</p>
            <button className="btn-newsletter">Subscribe Now</button>

            <div className="social-links">
              <img src={facebookLogo} alt="facebook-logo" />
              <img src={twitterLogo} alt="twitter-logo" />
              <img src={instagramLogo} alt="instagram-logo" />
              <img src={tiktokLogo} alt="tiktok-logo" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links link">
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Cookie Preferences</p>
          </div>
          <p>Copyright &copy; Urbane. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
