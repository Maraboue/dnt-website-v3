import React from 'react';
import dntLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="dnt__footer section__padding">
    <div className="dnt__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    <div className="dnt__footer-btn">
      <p>Get $DNT</p>
    </div>

    <div className="dnt__footer-links">
      <div className="dnt__footer-links_logo">
        <img src={dntLogo} alt="dnt_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="dnt__footer-copyright">
      <p>@2023 Dynamic Network. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
