import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };

  // 📅 Calculate estimated delivery date (5 days from now)
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  const estimatedDate = currentDate.toDateString();

  return (
    <div className="order-container">
      <h2>🎉 Order Confirmed!</h2>
      <p>Thank you for your purchase. Your order is being processed.</p>

      <div className="order-summary">
        <h3>📦 Estimated Delivery Date:</h3>
        <p className="delivery-date">{estimatedDate}</p>

        <h3>🛍 Order Details:</h3>
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} />
            <div className="order-details">
              <h4>{item.name}</h4>
              <p>₹{item.hasDiscount ? item.finalPrice : item.price} × {item.quantity}</p>
            </div>
          </div>
        ))}
        <h3 className="total-price">Total Paid: ₹{totalPrice.toFixed(2)}</h3>
      </div>

      <p className="message">You will receive an email confirmation with order details.</p>

      <button className="back-home" onClick={() => navigate("/Mellow-caps")}>🏠 Back to Home</button>
    </div>
  );
};

export default PlaceOrder;
