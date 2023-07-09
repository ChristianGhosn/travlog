import React from "react";
import "./footer.css";

import { travlog, mail, dots, shape } from "../../assets/index";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="design_5">
        <img src={shape} alt="design" />
      </div>
      <div className="newsletter-design">
        <img src={dots} alt="newsletter designs" />
      </div>
      <div className="footer__newsletter">
        <h2 className="heading">subscribe to our newsletter</h2>
        <h1 className="subheading">
          Prepare yourself & let’s explore the beauty of the world
        </h1>
        <form className="form">
          <div className="form-input">
            <img src={mail} alt="mail" />
            <input type="email" required placeholder="Your Email" />
          </div>
          <button type="submit" className="btn btn-large btn-primary">
            Subscribe
          </button>
        </form>
      </div>
      <footer className="footer__content">
        <div className="footer__content-logo">
          <div className="footer-logo">
            <img src={travlog} alt="Travlog Logo" />
            <h1 className="logo-text">
              <a href="/">Travlog</a>
            </h1>
          </div>
          <p className="text-primary">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="footer-socials">
            <BsFacebook color="#5D50C6" size={32} />
            <BsTwitter color="#5D50C6" size={32} />
            <BsInstagram color="#5D50C6" size={32} />
          </div>
        </div>
        <div className="footer__content-text">
          <h3 className="footer-heading">Company</h3>
          <p className="text-primary">About</p>
          <p className="text-primary">Career</p>
          <p className="text-primary">Mobile</p>
        </div>
        <div className="footer__content-text">
          <h3 className="footer-heading">Contact</h3>
          <p className="text-primary">Why Travlog?</p>
          <p className="text-primary">Partner with us</p>
          <p className="text-primary">FAQ's</p>
          <p className="text-primary">Blog</p>
        </div>
        <div className="footer__content-text">
          <h3 className="footer-heading">Meet Us</h3>
          <p className="text-primary">+00 92 1234 56789</p>
          <p className="text-primary">info@travlog.com</p>
          <p className="text-primary">205. R Street, New York, BD23200</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
