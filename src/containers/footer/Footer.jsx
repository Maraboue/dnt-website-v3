import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="dnt__footer section__padding">
    <div className="dnt__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    <div className="dnt__footer-btn">
      <p><a href="https://app.uniswap.org/#/swap?inputCurrency=0x86632544e69c8019babd01be75393f9c2d46ee70&outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&chain=mainnet">Get $DNT</a></p>
    </div>

    <div className="dnt__footer-links">
      <div className="dnt__footer-links_logo">
        <h1>Dynamic Network</h1>
        <p>The Dynamic Network Project, <br /> All Rights Reserved.  ©</p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Links</h4>
        <p>Discord</p>
        <p>Github</p>
        <p>Medium</p>
        <p>Twitter</p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Project</h4>
        <p>Research & Results</p>
        <p>Token Burning & Minting</p>
        <p>network Based Burn</p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Get in touch</h4>
        <p>Twitter @DynamicN3twork</p>
        <p>hello@dynamicnetworktoken.com</p>
      </div>
    </div>

    <div className="dnt__footer-copyright">
      <p>@2023 Dynamic Network. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
