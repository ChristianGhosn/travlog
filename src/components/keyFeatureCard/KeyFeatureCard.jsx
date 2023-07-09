import React from "react";
import "./keyFeatureCard.css";

const KeyFeatureCard = ({ image, heading, text, className }) => {
  return (
    <div className={className ? `feature_card ${className}` : "feature_card"}>
      <div className="feature_card-img">
        <img src={image} alt="Pin" />
      </div>
      <div className="feature_card-content">
        <h3 className="feature_card-heading">{heading}</h3>
        <p className="text-primary">{text}</p>
      </div>
    </div>
  );
};

export default KeyFeatureCard;
