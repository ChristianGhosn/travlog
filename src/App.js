import React from "react";
import "./app.css";
import { Nav } from "./components/index.js";
import {
  Brands,
  Footer,
  Hero,
  KeyFeatures,
  Services,
  Testimonials,
  TopDestinations,
  TravelPoint,
} from "./containers/index.js";

const App = () => {
  return (
    <div className="app">
      <div className="design_1" />
      <div className="design_3" />
      <Nav />
      <Hero />
      <Brands />
      <Services />
      <TopDestinations />
      <TravelPoint />
      <KeyFeatures />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
