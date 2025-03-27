import React, { useState } from "react";
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PlaceOrder from "./pages/PlaceOrder";
import ScrollToTop from "./ScrollToTop";
import LoginSignup from "./pages/LoginSignup";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "EDIKO Cap",
      price: 149,
      image: `${process.env.PUBLIC_URL}/images/cap1.jpg`,
      image2: `${process.env.PUBLIC_URL}/images/cap1(b).jpg`,
      image3: `${process.env.PUBLIC_URL}/images/cap1(c).jpg`,
      description: "Elevate your style with the Gorgeous EDIKO Sports and Casual Cap by Gorgeous Caps. This premium-quality black baseball cap is designed for both sporty and casual looks, making it a perfect everyday accessory. The cap features a bold orange EDIKO leather sticker at the center, adding a touch of uniqueness and sophistication to your outfit. Made from high-quality, breathable materials, it ensures all-day comfort while keeping your head cool. The freesize design provides a perfect and adjustable fit for all head sizes, making it an ideal choice for men and women. Whether you’re heading out for a run, hitting the gym, or just adding a stylish edge to your casual look, this cap is the perfect companion for every occasion.",
      bulletPoints: [
        `🔥 PREMIUM BLACK BASEBALL CAP – A PERFECT STYLE STATEMENT
Crafted with high-quality fabric, this black baseball cap is designed to add a sleek and stylish touch to your everyday look. Whether you're going for a sporty, casual, or trendy outfit, this cap blends effortlessly with any attire.`,
        `🧢 FREESIZE DESIGN – PERFECT & COMFORTABLE FIT FOR ALL
Designed to fit all head sizes, this cap comes with an adjustable strap at the back, ensuring a secure yet comfortable fit. Whether you have a small or large head, the freesize structure provides an easy, custom fit without any discomfort.`,
        `💪 DURABLE & HIGH-QUALITY MATERIAL – BUILT TO LAST
Constructed with top-notch materials and reinforced stitching, this cap is highly durable and retains its shape even with regular use. Whether worn for sports, outdoor activities, or daily wear, it remains in excellent condition for a long time.`,
        `☁️ ULTRA-COMFORTABLE & BREATHABLE – WEAR IT ALL DAY LONG
Made from lightweight, breathable, and sweat-absorbing fabric, this cap keeps you cool and comfortable throughout the day. The air-circulating design prevents heat buildup, making it ideal for both warm and cool weather.`
      ]
    },
    {
      id: 2,
      name: "KTM Cap",
      price: 199,
      image: `${process.env.PUBLIC_URL}/images/cap2.jpg`,
      image2: `${process.env.PUBLIC_URL}/images/cap2(b).jpg`,
      image3: `${process.env.PUBLIC_URL}/images/cap2(c).jpg`,
      description: "Unleash your passion for biking with the Gorgeous KTM Bike Riding Sports and Casual Cap by Gorgeous Caps. Designed for KTM bike lovers and riders, this premium black baseball cap features a bold orange KTM 3D embroidery logo that perfectly represents the KTM spirit. Whether you're on a thrilling bike ride or just looking for a stylish casual cap, this cap is the perfect addition to your outfit. Made from high-quality breathable fabric, it offers all-day comfort, while the freesize adjustable fit ensures a snug and secure feel for everyone. Elevate your biker look with this stylish and durable cap!",
      bulletPoints: [
        `🏍️ KTM BIKE LOVERS’ MUST-HAVE – PERFECT FOR RIDERS & ENTHUSIASTS
Designed for passionate KTM bike riders, this cap features a stylish black and orange color combination that matches the iconic KTM bike theme, making it an essential accessory for every biker.`,
        `🔥 BOLD 3D EMBROIDERY ‘KTM’ LOGO – PREMIUM LOOK & FINISH
Stand out with a high-quality 3D embroidered KTM logo in vibrant orange, giving the cap a premium and eye-catching look that reflects the power and speed of KTM bikes.`,
        `🧢 FREESIZE DESIGN – BEST FIT FOR ALL HEAD SIZES
The cap comes in a universal freesize fit with an adjustable strap at the back, ensuring a snug yet comfortable fit for all head sizes, making it suitable for both men and women.`,
        `💪 DURABLE & LONG-LASTING QUALITY – BUILT FOR ROUGH USE
Constructed with strong stitching and high-quality fabric, this cap is designed to withstand rough conditions, ensuring long-term durability even with daily outdoor use.`
      ]
    },
    {
      id: 3,
      name: "NY Cap",
      price: 249,
      image: `${process.env.PUBLIC_URL}/images/cap3.jpg`,
      image2: `${process.env.PUBLIC_URL}/images/cap3(b).jpg`,
      image3: `${process.env.PUBLIC_URL}/images/cap3(c).jpg`,
      description: "Upgrade your style with the Gorgeous NY Sports and Casual Cap by Gorgeous Caps. This premium black baseball cap features a bold white ‘NY’ 3D embroidery logo, a globally recognized symbol of street style, sports, and urban fashion. Worn by celebrities and fashion icons, this cap is a must-have accessory for anyone looking to add a touch of class and attitude to their outfit. Made from high-quality breathable fabric, it ensures all-day comfort, while the adjustable strap provides a perfect fit for all head sizes. Whether for casual wear, sports, or travel, this cap enhances your look effortlessly.",
      bulletPoints: [
        `🧢 ICONIC ‘NY’ 3D EMBROIDERY LOGO – CELEBRITY STYLE
Features a high-quality 3D embroidered ‘NY’ logo in crisp white, making it an iconic fashion piece that is loved by celebrities and trendsetters worldwide.`,
        `🔥 PREMIUM BLACK COLOR – TIMELESS & VERSATILE LOOK
The classic black design pairs perfectly with any outfit, adding a stylish and sophisticated touch to both casual and sporty looks.`,
        `💪 DURABLE & HIGH-QUALITY STITCHING – LONG-LASTING WEAR
Made with strong stitching and premium fabric, this cap is designed to last, ensuring durability for daily use in sports, outdoor activities, and casual wear.`,
        `🎁 GREAT GIFT CHOICE FOR NY FANS & TRENDSETTERS
An ideal gift for friends, family, or anyone who loves NY-inspired fashion, making it a perfect present for birthdays, festivals, and special occasions.`
      ]
    },
  ]);

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItem = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
   


  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleLogin = (email) => {
    localStorage.setItem("user", email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <ScrollToTop />

      <Navbar user={user} handleLogout={handleLogout} />

      <Routes>
        <Route path="/Mellow-caps" element={<Home />} />
        <Route path="/shop" element={<ProductList products={products} />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              products={products}
              cart={cart}
              addToCart={addToCart}
              updateCartItem={updateCartItem}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} updateCartItem={updateCartItem} removeFromCart={removeFromCart} />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} totalPrice={totalPrice} setCart={setCart} />}
        />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<LoginSignup handleLogin={handleLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
