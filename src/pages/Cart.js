import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css"; // Import updated styles

const Cart = ({ cart, removeFromCart, updateCartItem }) => {
  // Calculate total price with discounts if applied
  const totalPrice = cart.reduce((total, item) => {
    const finalPrice = item.hasDiscount ? item.finalPrice : item.price; // Use discounted price if applied
    return total + finalPrice * item.quantity;
  }, 0);

  const isCartEmpty = cart.length === 0;

  return (
    <div className={`cart ${isCartEmpty ? "cart-empty" : ""}`}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-icon">🛒</span>
          <p>Your cart is empty.</p>
          <a href="/shop" className="shop-now-btn">Shop Now</a>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image"/>
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>
                  <span className="final-price">₹{item.hasDiscount ? item.finalPrice : item.price}</span>
                </p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>

              {/* Quantity Counter on the Right */}
              <div className="quantity-section">
                <div className="quantity-control">
                  <button onClick={() => updateCartItem(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartItem(item.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </div>

          {/* Checkout Button */}
          <Link 
            to={isCartEmpty ? "#" : "/checkout"}
            state={{ cart, totalPrice }}
            className={`checkout-btn ${isCartEmpty ? "disabled" : ""}`}
            onClick={(e) => isCartEmpty && e.preventDefault()}
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
