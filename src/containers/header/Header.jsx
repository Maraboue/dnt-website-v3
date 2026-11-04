import React from 'react';
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa';
import { ContractAddress, Logo } from '../../components';
import { DISCORD_URL, GITHUB_URL, MEDIUM_URL, STATS, SWAP_URL, TWITTER_URL, WHITEPAPER_URL } from '../../content';
import './header.css';

const SOCIALS = [
  { label: 'Discord', href: DISCORD_URL, Icon: FaDiscord },
  { label: 'GitHub', href: GITHUB_URL, Icon: FaGithub },
  { label: 'Medium', href: MEDIUM_URL, Icon: FaMedium },
  { label: 'Twitter', href: TWITTER_URL, Icon: FaTwitter },
];

const Header = () => (
  <section className="hero" id="home">
    <div className="hero__main container">
      <div className="hero__content">
        <p className="eyebrow">An ERC-20 token on Ethereum</p>
        <h1 className="hero__title">The self-regulating cryptocurrency</h1>
        <p className="hero__lead">A fully decentralized community where the participants govern the future.</p>
        <div className="hero__actions">
          <a className="button button--primary" href={SWAP_URL} target="_blank" rel="noopener noreferrer">Get $DNT</a>
          <a className="button button--ghost" href={WHITEPAPER_URL} target="_blank" rel="noopener noreferrer">Read the whitepaper</a>
        </div>
        <ContractAddress />
      </div>

      <div className="hero__visual">
        <Logo idPrefix="hero" animated strokeWidth={9} nodeRadius={17} title="Dynamic Network logo, a network of connected nodes" />
      </div>
    </div>

    <div className="container">
      <dl className="stats">
        {STATS.map(({ value, label }) => (
          <div className="stats__item" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="community">
        <p>Join us in the world of decentralized finance</p>
        <ul>
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon size={18} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Header;
