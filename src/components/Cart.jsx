import { useOutletContext } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart() {
  const { cart } = useOutletContext();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <div>
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-summary">
        <h1>Summary</h1>
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
}
