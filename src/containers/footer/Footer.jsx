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
        <p><a href="https://discord.gg/Jn7M9Q3v4e">Discord</a></p>
        <p><a href="https://github.com/Dynamic-Network">Github</a></p>
        <p><a href="https://dynamic-network.medium.com/">Medium</a></p>
        <p><a href="https://twitter.com/DynamicN3twork">Twitter</a></p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Project</h4>
        <p><a href="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Research & Results</a></p>
        <p><a href="https://docs.google.com/document/d/e/2PACX-1vR_LcCdc9HBBLpmufoHLqPKs38zFeYzZPp0fo8Q2UNXhgq_K3UKM0oushG7lN1D4Bh_TF4Sjh_ueFOu/pub">Token Burning & Minting</a></p>
        <p><a href="https://docs.google.com/document/d/e/2PACX-1vTLgagJ4YEUFDJajGyl3SYT9tbbfLIvdq8e8Bj7qsK3IqAgdk0KUlK8b6LD_ejYawL6gdL91a4F-Hgq/pub">Network Based Burn</a></p>
      </div>
      <div className="dnt__footer-links_div">
        <h4>Get in touch</h4>
        <p><a href="https://twitter.com/DynamicN3twork">Twitter @DynamicN3twork</a></p>
        <p><a href="mailto:hello@dynamicnetworktoken.com">hello@dynamicnetworktoken.com</a></p>
      </div>
    </div>

    <div className="dnt__footer-copyright">
      <p>@2023 Dynamic Network. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
