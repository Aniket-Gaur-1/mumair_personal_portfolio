import React from "react";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing-section">
      <div className="intro-line">Hi I am</div>
      <div className="name">Muhammad Umair</div>
      <div className="ui-role">UI & UX</div>
      <div className="designer-role">Designer</div>

      <div className="description">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra.
      </div>
      <div className="cta-container">
        <button className="cta-button">Hire Me</button>
      </div>
      <div className="image-content">
        <img src="/images/Ellipse.png" alt="Landing" className="landing_img1" />
        <img
          src="/images/lowerLanding.png"
          alt="Landing"
          className="landing_img2"
        />
        <img
          src="/images/landingUpper.png"
          alt="Landing"
          className="landing_img3"
        />

        <img
          src="/images/transparent_rectangle.png"
          alt="Landing"
          className="strip"
        />
      </div>
      <div className="social-links">
        <img src="/images/facebook.png" alt="Facebook" className="image" />
        <img src="/images/twitter.png" alt="Twitter" className="image" />
        <img src="/images/ig.png" alt="Instagram" className="image" />
        <img src="/images/linkedin.png" alt="LinkedIn" className="image" />
      </div>
    </div>
  );
};

export default Landing;
