import React from "react";
import "./hero.css";

import { bag, collage, play } from "../../assets/index";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <button className="btn btn-pink">
          Explore the World!
          <img src={bag} alt="Bag" />
        </button>
        <h1 className="subheading">
          Travel <span className="text-pink">top destination</span> of the world
        </h1>
        <p className="text-primary">
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className="hero__content__buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">
            <img src={play} alt="Play button" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="hero__img">
        <img src={collage} alt="Collage" />
      </div>
    </div>
  );
};

export default Hero;
