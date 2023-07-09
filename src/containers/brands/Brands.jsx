import React from "react";
import "./brands.css";
import {
  airbnb,
  bookingSVG,
  expedia,
  orbitz,
  tripAdvisor,
  arrows,
} from "../../assets/index";
const Brands = () => {
  return (
    <div className="brands">
      <div className="design_2">
        <img src={arrows} alt="arrows design" />
      </div>
      <div className="brands__item">
        <img src={tripAdvisor} alt="Trip Advisor" />
      </div>
      <div className="brands__item">
        <img src={expedia} alt="Expedia" />
      </div>
      <div className="brands__item">
        <img src={bookingSVG} alt="Booking.com" />
      </div>
      <div className="brands__item">
        <img src={airbnb} alt="Airbnb" />
      </div>
      <div className="brands__item">
        <img src={orbitz} alt="Orbitz" />
      </div>
    </div>
  );
};

export default Brands;
