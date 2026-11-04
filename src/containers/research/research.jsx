import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { RESEARCH_METRICS, WHITEPAPER_URL } from '../../content';
import './research.css';

const SERIES = [
  { key: 'regulated', label: 'With burning and minting' },
  { key: 'unregulated', label: 'Without' },
];

const Research = () => (
  <section className="section research" id="research">
    <div className="container">
      <div className="research__top reveal">
        <div>
          <p className="eyebrow">Research</p>
          <h2 className="heading">Less volatility, tested in simulation</h2>
          <p className="lead">Research indicates that burning and minting make $DNT less volatile than a token without them, paving the way for a steadier, more predictable price path.</p>
        </div>
        <div className="research__headline">
          <p className="research__number">−13.7%</p>
          <p>Lower average volatility across 15 simulated iterations, falling from σ 0.448 to σ 0.386. In all 15 iterations, the regulated price had the lower standard deviation.</p>
        </div>
      </div>

      <figure className="metrics reveal">
        <figcaption>
          <span className="visually-hidden">Simulation results with and without burning and minting.</span>
          <ul className="metrics__legend">
            {SERIES.map(({ key, label }) => (
              <li key={key}><span className={`metrics__swatch metrics__swatch--${key}`} aria-hidden="true" />{label}</li>
            ))}
          </ul>
        </figcaption>

        <div className="metrics__grid">
          {RESEARCH_METRICS.map((metric) => {
            const max = Math.max(metric.regulated, metric.unregulated);
            return (
              <div className="metric" key={metric.name}>
                <h3>{metric.name}</h3>
                <p className="metric__note">{metric.note}</p>
                <dl>
                  {SERIES.map(({ key, label }) => (
                    <div className="metric__row" key={key} title={`${label}: ${metric[key]}`}>
                      <dt>{label}</dt>
                      <dd>{metric[key].toFixed(3)}</dd>
                      <span className="metric__track" aria-hidden="true">
                        <span className={`metric__bar metric__bar--${key}`} style={{ width: `${(metric[key] / max) * 100}%` }} />
                      </span>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </figure>

      <div className="research__foot reveal">
        <p>These results come from simulated transactions and geometric Brownian motion with an arbitrary starting price, not from live market data. They describe volatility, not returns.</p>
        <a className="research__link" href={WHITEPAPER_URL} target="_blank" rel="noopener noreferrer">
          Explore the research <RiArrowRightUpLine aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Research;
