import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "../styles/App.css";

import cartIcon from "../assets/img/cart-black-icon.svg";
import searchIcon from "../assets/img/search-icon.svg";

import facebookLogo from "../assets/img/facebook-logo.svg";
import tiktokLogo from "../assets/img/tiktok-logo.svg";
import twitterLogo from "../assets/img/twitter-logo.svg";
import instagramLogo from "../assets/img/instagram-logo.svg";

export default function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <h1 className="store-name">Urbane</h1>
          </Link>
        </div>

        <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
          <Link to="men" className="nav-link" onClick={() => setMenuOpen(false)}>
            <p>MEN</p>
          </Link>

          <Link to="women" className="nav-link" onClick={() => setMenuOpen(false)}>
            <p>WOMEN</p>
          </Link>

          <Link to="jewelry" className="nav-link" onClick={() => setMenuOpen(false)}>
            <p>JEWELRY</p>
          </Link>
        </nav>

        <div className="user-tools">
          <img src={searchIcon} alt="search-icon" />
          <div className="minicart-container">
            <Link to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
              <img src={cartIcon} alt="cart-icon" />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
            ☰
          </button>
        </div>
      </header>

      <main className="main-container">
        <Outlet context={{ cart, addToCart, setCart }} />
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
