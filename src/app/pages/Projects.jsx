import React, { useState } from "react";
import "../styles/projects.css";

const Projects = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="project-section">
      <div className="project">My Projects</div>
      <div className="project_text">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </div>

      <button
        className={`all btn ${activeButton === "all" ? "active" : ""}`}
        onClick={() => handleButtonClick("all")}
      >
        All
      </button>

      <div className="projects_buttons">
        <button
          className={`ui_btn btn ${activeButton === "ui" ? "active" : ""}`}
          onClick={() => handleButtonClick("ui")}
        >
          UI/UX
        </button>
        <button
          className={`web_btn btn ${activeButton === "web" ? "active" : ""}`}
          onClick={() => handleButtonClick("web")}
        >
          Web Design
        </button>
        <button
          className={`app_btn btn ${activeButton === "app" ? "active" : ""}`}
          onClick={() => handleButtonClick("app")}
        >
          App Design
        </button>
        <button
          className={`graphic_btn btn ${activeButton === "graphic" ? "active" : ""}`}
          onClick={() => handleButtonClick("graphic")}
        >
          Graphic Design
        </button>
      </div>

      <div className="web_design_1 wd ">
        <img
          src="/images/beigeRectangle.png"
          alt=""
          className="beigeRectangle "
        />
        <img
          src="/images/airCalling2.png"
          alt="Air calling"
          className="rectangle_img_2"
        />
        <img
          src="/images/airCalling1.png"
          alt="Air calling"
          className="rectangle_img_1"
        />
        <div className="web_design_1_text">Web Design </div>
        <div className="web_design_2_text">AirCalling Landing Page Design </div>
      </div>
      <div className="web_design_2 wd">
        <img
          src="/images/beigeRectangle.png"
          alt=""
          className="beigeRectangle "
        />
        <img
          src="/images/buisness2.png"
          alt="Buisness"
          className="rectangle_img_2"
        />
        <img
          src="/images/buisness1.png"
          alt="Buisness"
          className="rectangle_img_1"
        />
        <div className="web_design_1_text">Web Design </div>
        <div className="web_design_2_text">Business Landing Page Design </div>
      </div>
      <div className="web_design_3 wd">
        <img
          src="/images/beigeRectangle.png"
          alt=""
          className="beigeRectangle "
        />
        <img src="/images/ecom2.png" alt="" className="rectangle_img_2" />
        <img src="/images/ecom1.png" alt="" className="rectangle_img_1" />
        <div className="web_design_1_text">Web Design </div>
        <div className="web_design_2_text">Ecom Web Page Design </div>
      </div>
    </div>
  );
};

export default Projects;
