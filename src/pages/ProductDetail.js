import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ products, cart, addToCart, updateCartItem }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const cartItem = cart.find((item) => item.id === product?.id);

  const images = [product?.image, product?.image2, product?.image3].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[currentIndex]);

  // ✅ Fix: Add missing state variables
  const [showPopup, setShowPopup] = useState(false);
  const [applyCoupon, setApplyCoupon] = useState(false);
  const [showBulletPoints, setShowBulletPoints] = useState(false);

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  const finalPrice = applyCoupon ? (product.price * 0.8).toFixed(2) : product.price.toFixed(2);

  const handleAddToCart = () => {
    const productWithDiscount = {
      ...product,
      finalPrice: finalPrice,
      hasDiscount: applyCoupon,
    };

    addToCart(productWithDiscount);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  // Arrow Navigation for Images
  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="product-container">
      {/* Left Section - Images */}
      <div className="image-section">
        <div className="image-box">
          <button className="arrow left-arrow" onClick={handlePrevImage}>❮</button>
          <img className="main-image" src={selectedImage} alt={product.name} />
          <button className="arrow right-arrow" onClick={handleNextImage}>❯</button>
        </div>
        <div className="thumbnail-box">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                setSelectedImage(img);
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="details-section">
        <h2 className="product-title">{product.name}</h2>

        <p className="product-price">
          {applyCoupon && <span className="original-price">₹{product.price}</span>}
          <span className="final-price">₹{finalPrice}</span>
          {applyCoupon && <span className="discount-label"> (20% OFF) </span>}
        </p>

        <div className="coupon-box">
          <input type="checkbox" id="coupon-checkbox" checked={applyCoupon} onChange={() => setApplyCoupon(!applyCoupon)} />
          <label htmlFor="coupon-checkbox">
            Apply Coupon: <b>GET20</b> for 20% Off
          </label>
        </div>

        <div className="product-description-box">
          <h3>📄 Product Description</h3>
          <p dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, "<br>") }} />
          {showBulletPoints && (
            <ul>
              {product.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
          <button className="read-more-btn" onClick={() => setShowBulletPoints(!showBulletPoints)}>
            {showBulletPoints ? "Show Less" : "Read More"}
          </button>
        </div>

        <div className="services">
          <div className="service-item">🚚 <b>FREE Delivery</b> on all orders</div>
          <div className="service-item">🔄 <b>10-Day Returns & Exchange</b></div>
          <div className="service-item">💳 <b>Cash on Delivery (COD) Available</b></div>
        </div>

        {cartItem ? (
          <div className="quantity-box">
            <button onClick={() => updateCartItem(product.id, -1)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => updateCartItem(product.id, 1)}>+</button>
          </div>
        ) : (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>🛒 Add to Cart</button>
        )}

        {showPopup && <div className="popup">✅ Added to Cart!</div>}

        <div className="reviews-box">
          <h3>⭐ Customer Reviews</h3>
          <p>⭐️⭐️⭐️⭐️☆ (4.5/5) - 120 reviews</p>
          <p>💬 "Great quality! Highly recommended." - <b>Akram D.</b></p>
          <p>💬 "Perfect fit and comfortable." - <b>Kichu I.</b></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
