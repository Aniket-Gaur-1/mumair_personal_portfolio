import React from "react";
import "../styles/navbar.css";

const Navbar = ({
  scrollToSection,
  landingRef,
  aboutRef,
  servicesRef,
  projectsRef,
  testimonialsRef,
  contactRef,
}) => {
  function handleClick() {
    window.open("./images/ui_resume.pdf");
  }

  return (
    <div className="navbar_container">
      <div className="logo_container">
        <img src="/images/logo2.png" alt="logo" className="logo2" />
        <p className="mumair_text_2">
          M<span className="mumair_span_text_2">umair</span>
        </p>
      </div>
      <div className="links_container">
        <button onClick={() => scrollToSection(landingRef)}>Home</button>
        <button onClick={() => scrollToSection(aboutRef)}>About Me</button>
        <button onClick={() => scrollToSection(servicesRef)}>Services</button>
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(testimonialsRef)}>
          Testimonials
        </button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </div>
      <div className="button_container">
        <button className="myButton" onClick={handleClick}>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
