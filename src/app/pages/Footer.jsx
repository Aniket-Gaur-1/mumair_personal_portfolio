import React from "react";
import "../styles/footer.css";

const Footer = ({
  scrollToSection,
  landingRef,
  aboutRef,
  servicesRef,
  projectsRef,
  testimonialsRef,
  contactRef,
}) => {
  return (
    <div className="footer_section">
      <div className="footer_logo">
        <img src="/images/logo2.png" alt="logo" className="logo2" />
        <p className="mumair_text">
          M<span className="mumair_span_text">umair</span>
        </p>
      </div>
      <div className="footer_links">
        <button onClick={() => scrollToSection(landingRef)}>Home</button>
        <button onClick={() => scrollToSection(aboutRef)}>About Me</button>
        <button onClick={() => scrollToSection(servicesRef)}>Services</button>
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(testimonialsRef)}>
          Testimonials
        </button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </div>
      <div className="social_icons_footer">
        <img src="/images/facebook.png" alt="Facebook" className="image_2" />
        <img src="/images/twitter.png" alt="Twitter" className="image_2" />
        <img src="/images/ig.png" alt="Instagram" className="image_2" />
        <img src="/images/linkedIn.png" alt="LinkedIn" className="image_2" />
      </div>
      <div className="copyrights">
        <div className="copyright_text">
          © 2023 <span className="mumair copyright_text">Mumair</span> All
          Rights Reserved, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
