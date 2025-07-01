import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>Wear Confidence. Live Urbane.</h1>
        <p>Elevated everyday essentials for him, her, and beyond.</p>
        <div className="banner-links">
          <Link to="/men">Shop Men</Link>
          <Link to="/women">Shop Women</Link>
        </div>
      </div>
    </div>
  );
}
