import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about_container">
      <div className="image-section">
        <img src="/images/about.png" alt="about" className="about_img" />

        <img
          src="/images/transparent_rectangle.png"
          alt="Landing"
          className="strip-2"
        />
      </div>
      <div className="about_text">About Me</div>
      <div className="description-2">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra
      </div>
      <div className="group">
        <div className="ux_heading">UX</div>
        <img src="/images/orangeGroup.png" alt="UX " className="orangeGroup1" />

        <div className="website_heading">Website Design</div>

        <img src="/images/groupGrey.png" alt="" className="groupGrey2" />
        <img
          src="/images/groupOrangeLine1.png"
          alt="website design "
          className="groupOrangeLine1"
        />
        <div className="app_heading">App Design </div>
        <img src="/images/groupCircle.png" alt="" className="groupCircle1" />

        <img src="/images/groupGrey.png" alt="" className="groupGrey1" />

        <img
          src="/images/groupOrangeLine2.png"
          alt="App design"
          className="groupOrangeLine2"
        />

        <img src="/images/groupCircle.png" alt="" className="groupCircle2" />

        <div className="graphic_heading">Graphic Design </div>

        <img src="/images/orangeGroup.png" alt="" className="orangeGroup2" />
      </div>
    </div>
  );
};

export default About;
