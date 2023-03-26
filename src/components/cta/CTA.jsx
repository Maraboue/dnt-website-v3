import React from 'react';
import './cta.css';

const handleClick = (e) => {
  e.preventDefault();
  window.location.href = 'https://app.uniswap.org/#/swap?inputCurrency=0x86632544e69c8019babd01be75393f9c2d46ee70&outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&chain=mainnet';
};

const CTA = () => (
  <div className="dnt__cta">
    <div className="dnt__cta-content">
      <p>Future of finance is DeFi.</p>
      <h3>Join the Dynamic Network today and start exploring the endless possibilities.</h3>
    </div>
    <div className="dnt__cta-btn">
      <button type="button" onClick={handleClick}>Get $DNT</button>
    </div>
  </div>
);

export default CTA;
