import React from 'react';
import { ContractAddress } from '../../components';
import { SWAP_URL, TOKEN_FACTS } from '../../content';
import './token.css';

const Token = () => (
  <section className="section token" id="token">
    <div className="container token__grid">
      <div className="reveal">
        <p className="eyebrow">Dynamic Network Token</p>
        <h2 className="heading">Transactions that benefit everyone</h2>
        <p className="lead">Be part of a community-driven network where the governing token is self-regulating and deflationary by design. Transactions should benefit users, holders and traders all at the same time.</p>
        <div className="token__actions">
          <a className="button button--primary" href={SWAP_URL} target="_blank" rel="noopener noreferrer">Get $DNT on Uniswap</a>
          <ContractAddress />
        </div>
      </div>

      <ul className="token__facts reveal">
        {TOKEN_FACTS.map(({ title, text }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Token;
