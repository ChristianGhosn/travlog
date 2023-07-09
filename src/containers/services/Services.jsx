import React from "react";
import "./services.css";
import { ServiceCard } from "../../components/index";
import { destination, booking } from "../../assets/index";

const Services = () => {
  return (
    <div className="services">
      <div className="services__headings">
        <h2 className="heading">services</h2>
        <h1 className="subheading">Our top value categories for you</h1>
      </div>
      <div className="services__cards">
        <ServiceCard
          image={destination}
          heading="Best Tour Guide"
          description="What looked like a small patch of purple grass, above five feet."
        />
        <ServiceCard
          image={booking}
          heading="Easy Booking"
          description="Square, was moving across the sand in their direction."
        />
      </div>
    </div>
  );
};

export default Services;
