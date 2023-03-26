import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="dnt__whatdnt section__margin" id="about">
    <div className="dnt__whatdnt-feature">
      <Feature title="About Dynamic Network" text="We believe in a good means of payment. This includes it to be decentralized thus being more resistant and deflationary being in favour for the user. We propose the Dynamic Network Token as a self regulating, decentarlized and deflationary token - a better means of exchanging value." />
    </div>
    <div className="dnt__whatdnt-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
      <p><a href="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Explore the Research ➤</a></p>
    </div>
    <div className="dnt__whatdnt-container">
      <Feature title="Research" text="Behind the idea of a self regulating means of exchange, manifested in the DNT token, lies a deep dive in computer science. By applying Quantitaive theory of money, creating simulations utilizing Geometric Brownian motion and then visualizing the results through regression models, the token is backed by the findings of this research." />
      <Feature title="Knowledgebased" text="The results from the research, yielded some insights in deflation and self regulation. We managed to reduce both volatility (sigma value) and keep the inflation down by 6,128 % over many iterations. Assuring that the theory behind the DNT token is evidence based." />
      <Feature title="Vision" text="By using fair means of exchange we can restore a broken trust between parties. Transacting should be an event where all people gain from it and by not transcating, it shouldn't reduce purchasing power. Therefor, we believe that the Dynamic Network token is needed to solve these problems" />
    </div>
  </div>
);

export default About;
