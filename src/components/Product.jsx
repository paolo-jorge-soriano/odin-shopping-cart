import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import "../styles/Product.css";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useOutletContext();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantity = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} className="product-img" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>

        <div className="quantity-controls">
          <button onClick={() => handleQuantity(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantity(1)}>+</button>
        </div>

        <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
}
