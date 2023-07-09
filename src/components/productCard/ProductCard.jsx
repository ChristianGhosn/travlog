import React from "react";
import "./productCard.css";
import { star } from "../../assets/index";

const ProductCard = ({ image, heading, destination, price, rating }) => {
  return (
    <div className="productCard">
      <img src={image} alt={heading} />
      <div className="content">
        <div className="details">
          <h5>{heading}</h5>
          <p>{destination}</p>
          <div className="rating">
            <span>{rating}</span>
            <img className="rating-icon" src={star} alt="Star ratings star" />
          </div>
        </div>
        <div className="price">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
