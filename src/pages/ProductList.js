import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css"; // Import updated styles

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Our Caps Collection</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            {/* ✅ Corrected Link Syntax */}
            <Link to={`/product/${product.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
