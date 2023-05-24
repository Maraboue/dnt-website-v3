import React from 'react';
import possibilityImage from '../../assets/tech2.png';
import './socials.css';

const Socials = () => (
  <div className="dnt__possibility section__padding" id="token">
    <div className="dnt__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="dnt__possibility-content">
      <h4>Join the future of decentralized finance today</h4>
      <h1 className="gradient__text"> Transactions that benefits everyone.<br /> Dynamic Network Token.</h1>
      <p>Be part of a community driven network where the governing token is self regulating, deflationary and has a more stable growth. Transactions should benefit the users, holders and traders all at the same time.</p>
      <h4>Available now on Uniswap</h4>
    </div>
  </div>
);

export default Socials;
