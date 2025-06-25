import { useState, useEffect } from "react";
import "../styles/section.css";

export default function Mens() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMensClothing = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/men%27s%20clothing"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching men's clothing:", error);
      }
    };

    fetchMensClothing();
  }, []);

  return (
    <div className="men-container">
      <h1>Men</h1>
      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
