import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="yummE logo" />
          <p>
            Thank you for choosing yummE for your culinary adventures. Stay
            connected with us for the latest updates and exclusive offers. Let's
            continue to savor the journey together, one delicious dish at a time.
          </p>
          <div className="footer-social-icons">
            <a href="#/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="#/" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="#/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>QUICK LINKS</h2>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/">About us</a></li>
            <li><a href="#/">Delivery</a></li>
            <li><a href="#/">Privacy policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9876205589</li>
            <li>Yummeofficial.@gmail.com</li>
            <li>123, YummE Street, Food City, India</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © yummE.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;