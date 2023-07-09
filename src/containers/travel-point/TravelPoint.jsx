import React from "react";
import "./travelPoint.css";
import { nomad } from "../../assets/index";
import { FeatureCard } from "../../components";

const TravelPoint = () => {
  return (
    <div className="travelPoint">
      <div className="travelPoint__img">
        <img src={nomad} alt="travel point" />
      </div>
      <div className="travelPoint__content">
        <div className="content__headings">
          <h2 className="heading">travel point</h2>
          <h1 className="subheading">
            We helping you find your dream location
          </h1>
          <p className="text-primary">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="content__features">
          <FeatureCard feature="500+" description="Holiday Package" />
          <FeatureCard feature="100" description="Luxury Hotels" />
          <FeatureCard feature="7" description="Premium Airlines" />
          <FeatureCard feature="2k+" description="Happy Customers" />
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
