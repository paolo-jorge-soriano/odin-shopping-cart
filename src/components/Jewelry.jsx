import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/section.css";

export default function Jewelry() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching jewelry:", error);
      }
    };

    fetchJewelry();
  }, []);

  return (
    <div className="content-container">
      <h1>Jewelry</h1>
      <div className="grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4 className="title">{product.title}</h4>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
