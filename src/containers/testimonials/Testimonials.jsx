import React from "react";
import "./testimonials.css";
import { PageCounter, TestimonialCard } from "../../components/index";
import { contour } from "../../assets/index";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="design_6">
        <img src={contour} alt="design 6 contour" />
      </div>
      <div className="testimonials__heading">
        <h2 className="heading">Testimonials</h2>
        <h1 className="subheading">Trust our clients</h1>
      </div>
      <div className="testimonials__content">
        <TestimonialCard />
        <div className="card-counter">
          <PageCounter active={false} />
          <PageCounter active={true} />
          <PageCounter active={false} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
