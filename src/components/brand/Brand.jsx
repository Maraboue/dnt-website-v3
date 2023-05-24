import React from 'react';
import { discord, github, medium, twitter } from './imports';
import './brand.css';

const Brand = () => (
  <div className="dnt__brand section__padding">
    <div className="brand_image">
      <a href="https://discord.gg/2d7PNevWJv">
        <img src={discord} />
      </a>
    </div>
    <div className="brand_image">
      <a href="https://github.com/Dynamic-Network">
        <img src={github} />
      </a>
    </div>
    <div className="brand_image">
      <a href="https://dynamic-network.medium.com/">
        <img src={medium} />
      </a>
    </div>
    <div className="brand_image">
      <a href="https://twitter.com/DynamicN3twork">
        <img src={twitter} />
      </a>
    </div>
  </div>
);

export default Brand;
