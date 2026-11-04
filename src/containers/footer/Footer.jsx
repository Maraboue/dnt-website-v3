import React from 'react';
import { Logo } from '../../components';
import { BURNING_URL, DISCORD_URL, EMAIL, GITHUB_URL, MEDIUM_URL, NBB_URL, TWITTER_URL, WHITEPAPER_URL } from '../../content';
import './footer.css';

const COLUMNS = [
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: DISCORD_URL },
      { label: 'GitHub', href: GITHUB_URL },
      { label: 'Medium', href: MEDIUM_URL },
      { label: 'Twitter', href: TWITTER_URL },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Research & Results', href: WHITEPAPER_URL },
      { label: 'Token Burning & Minting', href: BURNING_URL },
      { label: 'Network Based Burning', href: NBB_URL },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: '@DynamicN3twork', href: TWITTER_URL },
      { label: EMAIL, href: `mailto:${EMAIL}` },
    ],
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div className="footer__brand">
          <Logo idPrefix="footer" size={30} />
          Dynamic Network
        </div>
        {COLUMNS.map(({ title, links }) => (
          <div key={title}>
            <h2>{title}</h2>
            <ul>
              {links.map(({ label, href }) => {
                const external = !href.startsWith('mailto:');
                return (
                  <li key={label}>
                    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>Nothing on this site is financial advice. Crypto assets are volatile and you can lose what you put in. Research figures come from simulations and don’t predict real-world performance.</p>
        <p>© {new Date().getFullYear()} Dynamic Network. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
