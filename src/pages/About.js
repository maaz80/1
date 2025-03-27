import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Mellow Caps</h1>
        <p>Where Style Meets Comfort</p>
      </header>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Mellow is more than just a brand. We are passionate about creating stylish, high-quality caps that blend fashion with functionality. 
            Our journey began with a vision to redefine headwear, making every piece not just an accessory but a statement.
          </p>
          <p>
            From classic designs to modern aesthetics, we craft each cap with precision and care, ensuring you get the best in comfort and style. 
            Whether you're dressing up or keeping it casual, Mellow caps are designed to fit every occasion.
          </p>
        </div>
        
        {/* About Image */}
        <div className="about-image">
          <img src="/images/logo.png" alt="About Mellow" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To deliver premium-quality caps that reflect style, comfort, and individuality while ensuring sustainability and innovation in every design.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To become the leading global brand in headwear, setting new standards in fashion and quality for customers worldwide.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Have questions? We’d love to hear from you! Reach out to us anytime.</p>
        <a href="/contact" className="contact-btn">Contact Us</a>
      </section>
    </div>
  );
};

export default About;
