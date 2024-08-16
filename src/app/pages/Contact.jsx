import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactClick = async () => {
    if (email) {
      try {
        await axios.post("/send-email", { email });

        alert("Email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact_heading">Lets Design Together</div>
      <div className="contact_text">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>

      <div className="input_container">
        <input
          type="email"
          placeholder="Enter your email"
          className="email_area"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="contact_btn" onClick={handleContactClick}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
