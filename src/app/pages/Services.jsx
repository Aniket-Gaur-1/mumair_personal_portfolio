import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <div className="service-section">
      <div className="service">Services</div>
      <div className="description-3">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>

      <div className="rectangle-1 rectangle">
        <div className="ui_layout">
          <img src="/images/ui.png" alt="UI/UX" className="ui_img" />
          <img src="/images/box.png" alt="UI/UX" className="box_img_1 box" />
          <img src="/images/box.png" alt="UI/UX" className="box_img_2 box" />
          <img src="/images/dot.png" alt="UI/UX" className="dot_img" />
          <img src="/images/line.png" alt="UI/UX" className="line_img_1 line" />
          <img src="/images/line.png" alt="UI/UX" className="line_img_2 line" />
          <img src="/images/line.png" alt="UI/UX" className="line_img_3 line" />
          <img src="/images/line.png" alt="UI/UX" className="line_img_4 line" />
        </div>
        <div className="ui work">UI/UX</div>
        <div className=" lorem">
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </div>
      </div>
      <div className="rectangle-2 rectangle">
        <div className="web_layout">
          <img src="/images/web.png" alt="web" className="web_image" />
          <img
            src="/images/tinyOrangeLine.png"
            alt="web"
            className="tinyOrangeLine"
          />
          <img src="/images/dot.png" alt="web" className="dot" />
          <img src="/images/orangeLine.png" alt="web" className="orangeLine" />

          <img src="/images/vert.png" alt="web" className="vert" />
          <img src="/images/gate.png" alt="web" className="gate" />
          <img src="/images/scene.png" alt="web" className="scene" />

          <img
            src="/images/smallLineBlack.png"
            alt="web"
            className="smallLineBlack sml_1"
          />
          <img
            src="/images/smallLineBlack.png"
            alt="web"
            className="smallLineBlack sml_2"
          />
          <img
            src="/images/smallLineBlack.png"
            alt="web"
            className="smallLineBlack sml_3"
          />
          <img
            src="/images/smallLineBlack.png"
            alt="web"
            className="smallLineBlack sml_4"
          />
          <img
            src="/images/smallLineBlack.png"
            alt="web"
            className="smallLineBlack sml_5"
          />
        </div>
        <div className="web work">Web Design</div>
        <div className=" lorem">
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </div>
      </div>
      <div className="rectangle-3 rectangle">
        <div className="app_layout">
          <img src="/images/mobile.png" alt="app" className="app_img" />
        </div>
        <div className="app work">App Design</div>
        <div className=" lorem">
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </div>
      </div>
      <div className="rectangle-4 rectangle">
        <div className="graphic_layout">
          <img src="/images/design.png" alt="graphic" className="graphic_img" />
          <img
            src="/images/circle.png"
            alt="graphic"
            className="circle_img_1 circle"
          />
          <img
            src="/images/circle.png"
            alt="graphic"
            className="circle_img_2 circle"
          />
          <img
            src="/images/circle.png"
            alt="graphic"
            className="circle_img_3 circle"
          />
        </div>
        <div className="garphic work">Graphic Design </div>
        <div className=" lorem">
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </div>
      </div>
    </div>
  );
};

export default Services;
