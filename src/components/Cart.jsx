import { useOutletContext } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart() {
  const { cart } = useOutletContext();

  const toTitleCase = (str) => {
    let strSplit = str.toLowerCase().split(" ");
    return strSplit.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Shopping Cart</h1>
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="left-container">
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-info-container">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>{toTitleCase(item.category)}</p>
                  <p>${item.price}</p>
                </div>
                <div className="qty-subtotal">
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right-container">
        <div className="cart-summary">
          <div>
            <h2>Summary</h2>
            <h2>{cart.length} item(s)</h2>
          </div>

          <div>
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>

          <div>
            <p>Shipping</p>
            <p>FREE</p>
          </div>

          <div>
            <h3>Total</h3>
            <h3>${getTotal()}</h3>
          </div>
        </div>

        <div className="checkout">
          <button className="btn-checkout">Checkout</button>
          <button className="btn-continue-shopping">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}
