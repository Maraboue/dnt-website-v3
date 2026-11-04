import React from 'react';
import { PILLARS } from '../../content';
import './about.css';

const About = () => (
  <section className="section about" id="about">
    <div className="container">
      <div className="about__intro reveal">
        <p className="eyebrow">About Dynamic Network</p>
        <div>
          <h2 className="heading">We believe in good means of payment: decentralized, resistant and deflationary.</h2>
          <p className="lead">Sound means of exchange are made to benefit their users. That’s why we propose the Dynamic Network Token, a self-regulating, decentralized and deflationary token. The better way of exchanging value.</p>
        </div>
      </div>

      <ul className="about__pillars reveal">
        {PILLARS.map(({ title, text }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
