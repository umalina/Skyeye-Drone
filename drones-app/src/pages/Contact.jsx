import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We received your message.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>🏢 123 Drone Street, Sky City, USA</p>
          <p>📧 info@skyeedrones.com</p>
          <p>📞 +1 234 567 890</p>
          <h3>Follow Us</h3>
          <p>🌐 Twitter | Facebook | Instagram | LinkedIn</p>
        </div>
      </div>
    </div>
  );
}
