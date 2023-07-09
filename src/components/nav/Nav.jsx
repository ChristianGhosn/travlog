import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./nav.css";
import { travlog } from "../../assets/index.js";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={travlog} alt="Travlog Logo" />
        <h1 className="logo-text">
          <a href="/">Travlog</a>
        </h1>
      </div>
      <div className="nav__content">
        <ul className="nav__content-list">
          <li className="nav_active">
            <a href="#home">Home</a>
          </li>
          <li className="">
            <a href="#discover">Discover</a>
          </li>
          <li className="">
            <a href="#special-deals">Special Deals</a>
          </li>
          <li className="">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav__account">
        <button className="btn btn-secondary">Log In</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
      <div className="nav-smallscreen">
        <GiHamburgerMenu
          fontSize={27}
          onClick={() => {
            setToggle(true);
          }}
        />
      </div>
      {toggle && (
        <div className="overlay">
          <AiOutlineClose
            fontSize={27}
            className="overlay__close"
            onClick={() => {
              setToggle(false);
            }}
          />
          <ul className="nav__smallscreen-content-list">
            <li className="nav_active">
              <a href="#home">Home</a>
            </li>
            <li className="">
              <a href="#discover">Discover</a>
            </li>
            <li className="">
              <a href="#special-deals">Special Deals</a>
            </li>
            <li className="">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="btn btn-secondary">Log In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
