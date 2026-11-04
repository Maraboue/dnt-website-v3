import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { DOCS } from '../../content';
import './docs.css';

const Docs = () => (
  <section className="section docs" id="docs">
    <div className="container">
      <div className="docs__head reveal">
        <p className="eyebrow">Docs</p>
        <h2 className="heading">Want to know more? Get to know the Dynamic Network in depth.</h2>
      </div>

      <ul className="docs__list reveal">
        {DOCS.map(({ tag, title, text, href }) => (
          <li key={title}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <span className="docs__tag">{tag}</span>
              <span className="docs__title">{title}</span>
              <span className="docs__text">{text}</span>
              <RiArrowRightUpLine className="docs__arrow" size={24} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Docs;
