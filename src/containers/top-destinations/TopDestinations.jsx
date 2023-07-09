import React from "react";
import "./topDestinations.css";
import { beach, crosses, fish, mountain } from "../../assets/index";
import ProductCard from "../../components/productCard/ProductCard";

const TopDestinations = () => {
  return (
    <div className="topDestinations">
      <div className="design_4">
        <img src={crosses} alt="design 4" />
      </div>
      <div className="topDestinations__headings">
        <h2 className="heading">top destination</h2>
        <h1 className="subheading">Explore top destination</h1>
      </div>
      <div className="topDestinations__products">
        <ProductCard
          image={beach}
          heading="Paradise Beach, Bantayan Island"
          destination="Rome, Italy"
          price="$550.16"
          rating="4.8"
        />
        <ProductCard
          image={fish}
          heading="Ocean with full of Colors"
          destination="Maldives"
          price="$20.99"
          rating="4.5"
        />
        <ProductCard
          image={mountain}
          heading="Mountain View, Above the cloud"
          destination="United Arab Emeries "
          price="$150.99"
          rating="5.0"
        />
      </div>
    </div>
  );
};

export default TopDestinations;
