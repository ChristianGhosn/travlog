import React from "react";
import "./testimonialCard.css";
import { testimonial, star } from "../../assets/index";

const TestimonialCard = () => {
  return (
    <div className="testimonial__card">
      <img className="card__photo" src={testimonial} alt="testimonial" />
      <div className="testimonial__card-name">
        <h2>Mark Smith</h2>
        <span> / Travel Enthusiast</span>
      </div>
      <div className="star-rating">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <p className="text-primary">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>
    </div>
  );
};

export default TestimonialCard;
