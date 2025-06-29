import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/section.css";

export default function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMensClothing = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/men%27s%20clothing");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching men's clothing:", error);
      }
    };

    fetchMensClothing();
  }, []);

  return (
    <div className="content-container">
      <h1>Men</h1>
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
