import React from 'react';
import Feature from '../../components/feature/Feature.jsx';
import './research.css';

const featuresData = [
  {
    title: 'Improving the exchange of value',
    text: 'By creating the $DNT token, a means of exchange exists so it benefits both holders and traders. In the short and the long run.',
  },
  {
    title: 'Burning and Minting',
    text: 'Burning in $DNT controls the volatility in a better way, thus making the Dynamic Network Token less volatile. The ratio implemented for the burning and minting is 2:1 in favor for the burning - creating a more deflationary token.',
  },
  {
    title: 'Network Based Burning',
    text: 'We believe that a good token is backed by a strong network. Therefore, we have implemented Network Based Burning. This means that as the Dynamic Network grows, burns will occur based on the amount of users in the network.',
  },
  {
    title: 'Less Volatility',
    text: 'Research indicates that the burning and minting implemented in $DNT makes it is less volatile than a token that does not have this functionality implemented. This pave the way for a more stable growth, making the Dynamic Network Token more predictable.',
  },
];

const Research = () => (
  <div className="dnt__features section__padding" id="socials">
    <div className="dnt__features-heading">
      <h1 className="gradient__text">The Future is Now and Alternative Ways of Payment is Part of It. Step into the Future of Transacting Today!</h1>
      <p>Read More in Depth About the Project and its features.</p>
    </div>
    <div className="dnt__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Research;
