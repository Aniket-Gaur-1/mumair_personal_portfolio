import React from "react";
import "../styles/testimonials.css";

const Testimonials = () => {
  return (
    <div className="reviews-section">
      <div className="testimonial">Testimonials</div>
      <div className="testimonial_text">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>
      <div className="review_area ra1">
        <img src="/images/loremImg.png" alt="reviews" className="loremImg" />
      </div>
      <div className="review_area ra2">
        <img src="/images/ceo1.png" alt="ceo" className="ceo1" />
        <img src="/images/loremImg.png" alt="reviews" className="loremImg" />
      </div>
      <div className="review_area  ra3">
        <img src="/images/manImage.png" alt="ceo" className="ceo1" />
        <img src="/images/loremImg.png" alt="reviews" className="loremImg" />
      </div>
      <div className="line_container">
        <img src="/images/greyLine.png" alt="options" className="line_2 l1" />
        <img
          src="/images/orangeOption.png"
          alt="options"
          className="line_2 l2"
        />
        <img src="/images/greyLine.png" alt="options" className="line_2 l3" />
        <img src="/images/greyLine.png" alt="options" className="line_2 l4" />
      </div>
    </div>
  );
};

export default Testimonials;
