"use client";
import React, { useRef } from "react";
import "./globals.css";
import ToggleButton from "./components/ToggleButton";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

export default function RootLayout({ children }) {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <html lang="en">
      <head>
        <title>Your Portfolio</title>
        <meta name="description" content="Your personal portfolio" />
      </head>
      <body>
        <ToggleButton />
        <div className="navbar-section">
          <Navbar
            scrollToSection={scrollToSection}
            landingRef={landingRef}
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            projectsRef={projectsRef}
            testimonialsRef={testimonialsRef}
            contactRef={contactRef}
          />
        </div>
        <div ref={landingRef}>
          <Landing />
        </div>
        <div ref={aboutRef} className="about-section">
          <About />
        </div>
        <div ref={servicesRef} className="section">
          <Services />
        </div>
        <div ref={projectsRef} className="section">
          <Projects />
        </div>
        <div ref={testimonialsRef} className="section">
          <Testimonials />
        </div>
        <div ref={contactRef} className="section">
          <Contact />
        </div>
        <div>
          <Footer
            scrollToSection={scrollToSection}
            landingRef={landingRef}
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            projectsRef={projectsRef}
            testimonialsRef={testimonialsRef}
            contactRef={contactRef}
          />
        </div>
      </body>
    </html>
  );
}
