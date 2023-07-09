import React from "react";
import "./key.css";
import { services, pin, calendar, ticketLarge } from "../../assets/index";
import { KeyFeatureCard } from "../../components/index";

const KeyFeatures = () => {
  return (
    <div className="keyFeatures">
      <div className="keyFeatures__content">
        <div className="keyFeatures__content__headings">
          <h2 className="heading">Key features</h2>
          <h1 className="subheading">We offer best services</h1>
          <p className="text-primary">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="keyFeatures__content__features">
          <KeyFeatureCard
            image={pin}
            heading="We offer best services"
            text="Lorem Ipsum is not simply random text"
          />
          <KeyFeatureCard
            className="border-active"
            image={calendar}
            heading="Schedule your trip"
            text="It has roots in a piece of classical"
          />
          <KeyFeatureCard
            image={ticketLarge}
            heading="Get discounted coupons"
            text="Lorem Ipsum is not simply random text"
          />
        </div>
      </div>
      <div className="keyFeatures__img">
        <img src={services} alt="Key Features" />
      </div>
    </div>
  );
};

export default KeyFeatures;
