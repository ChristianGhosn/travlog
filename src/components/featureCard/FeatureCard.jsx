import React from "react";
import "./featureCard.css";

const FeatureCard = ({ feature, description }) => {
  return (
    <div className="featureCard">
      <h3 className="featureCard__feature">{feature}</h3>
      <p className="text-primary">{description}</p>
    </div>
  );
};

export default FeatureCard;
