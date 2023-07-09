import React from "react";
import "./serviceCard.css";

const ServiceCard = ({ image, heading, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={image} />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
