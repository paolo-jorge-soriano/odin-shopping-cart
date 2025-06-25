import { useState, useEffect } from "react";
import "../styles/section.css";

export default function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchWomensClothing = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/women%27s%20clothing"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching men's clothing:", error);
      }
    };

    fetchWomensClothing();
  }, []);

  return (
    <main className="content-container">
      <h1>Women</h1>
      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4 className="title">{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
