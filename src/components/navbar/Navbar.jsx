import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logotyp from '../../assets/logotyp.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = 'https://app.uniswap.org/#/swap?inputCurrency=0x86632544e69c8019babd01be75393f9c2d46ee70&outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&chain=mainnet';
  };

  return (
    <div className="dnt__navbar">
      <div className="dnt__navbar-links">
        <div className="dnt__navbar-links_logo">
          <img src={logotyp} />
        </div>
        <div className="dnt__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#socials">Research</a></p>
          <p><a href="#token">Token</a></p>
          <p><a href="#docs">Docs</a></p>
        </div>
      </div>
      <div className="dnt__navbar-sign">
        <button type="button" onClick={handleClick}>Get $DNT</button>
      </div>
      <div className="dnt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="dnt__navbar-menu_container scale-up-center">
          <div className="dnt__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#token">Token</a></p>
            <p><a href="#socials">Research</a></p>
            <p><a href="#docs">Docs</a></p>
          </div>
          <div className="dnt__navbar-menu_container-links-sign">
            <button type="button">Get $DNT</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
