import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/section.css";

export default function Men() {
  const { addToCart } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);

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

  const handleQuantityChange = (id, value) => {
    setQuantity((prev) => ({ ...prev, [id]: parseInt(value) || 1 }));
  };

  return (
    <div className="content-container">
      <h1>Men</h1>
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4 className="title">{product.title}</h4>
            <p>${product.price}</p>

            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(product.id, (quantity[product.id] || 1) - 1)}>-</button>
              <span>{quantity[product.id] || 1}</span>
              <button onClick={() => handleQuantityChange(product.id, (quantity[product.id] || 1) + 1)}>+</button>
            </div>

            <button onClick={() => addToCart(product, quantity[product.id] || 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
