import React, { useEffect, useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { NAV_LINKS, SWAP_URL } from '../../content';
import Logo from '../logo/Logo';
import './navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar__inner container" aria-label="Main">
        <a className="navbar__brand" href="#home" onClick={close}>
          <Logo idPrefix="nav" size={30} />
          Dynamic Network
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <a className="button button--primary navbar__cta" href={SWAP_URL} target="_blank" rel="noopener noreferrer">Get $DNT</a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <RiCloseLine size={24} aria-hidden="true" /> : <RiMenuLine size={24} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="navbar__menu" id="mobile-menu">
          <ul className="container">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}><a href={href} onClick={close}>{label}</a></li>
            ))}
            <li>
              <a className="button button--primary" href={SWAP_URL} target="_blank" rel="noopener noreferrer" onClick={close}>Get $DNT</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
