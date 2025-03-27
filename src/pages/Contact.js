import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    if (!formData.email.includes("@")) {
      setPopupMessage("Please enter a valid email address with '@'");
      setPopupType("error");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
      return;
    }

    if (formData.name && formData.email && formData.message) {
      setPopupMessage("Message sent successfully!");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);

      // Clear input fields after sending
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      {/* Left Section - Contact Details */}
      <div className="contact-info">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-text">Have any questions? We'd love to hear from you!</p>

        <div className="contact-details">
          <p><FaPhone className="contact-icon" /> +91 8080989896</p>
          <p><FaEnvelope className="contact-icon" /> support@mellowcaps.com</p>
          <p><FaMapMarkerAlt className="contact-icon" /> Sector 17 Dream Enclave, Taloja phase 2, Maharashtra</p>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-form">
        <h2>Send us a message</h2>
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          className="contact-input" 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          className="contact-input" 
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          className="contact-textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="contact-button" onClick={handleSendMessage}>Send Message</button>
      </div>

      {/* Styled Popup Message */}
      {showPopup && (
        <div className={`popup-message ${popupType}`}>
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
