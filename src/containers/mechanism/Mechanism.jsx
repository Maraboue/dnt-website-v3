import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { BURNING_URL, ETHERSCAN_URL, NBB_URL, NETWORK_BURNS, WORKED_EXAMPLES } from '../../content';
import './mechanism.css';

const format = (number) => number.toLocaleString('en-US');

const Mechanism = () => (
  <section className="section mechanism" id="mechanism">
    <div className="container">
      <div className="reveal">
        <p className="eyebrow">How it works</p>
        <h2 className="heading">Step into the future of transacting</h2>
        <p className="lead">Alternative ways of payment are part of the future. $DNT is a means of exchange built to benefit holders, daily users and traders, in the short and the long run.</p>
      </div>

      <figure className="corridor reveal">
        <figcaption>
          <h3>Supply moves within fixed limits</h3>
          <p>Burning has twice the room of minting, so the design leans deflationary.</p>
        </figcaption>
        <div className="corridor__scale" aria-hidden="true">
          <span>21M<small>Minimum</small></span>
          <span className="corridor__start" style={{ left: '66.667%' }}>42M<small>Start</small></span>
          <span>52.5M<small>Maximum</small></span>
        </div>
        <div className="corridor__bar" aria-hidden="true">
          <span className="corridor__burn" />
          <span className="corridor__mint" />
        </div>
        <dl className="corridor__room">
          <div className="corridor__room-burn">
            <dt>Room to burn</dt>
            <dd>21M <span>−50%</span></dd>
          </div>
          <div className="corridor__room-mint">
            <dt>Room to mint</dt>
            <dd>10.5M <span>+25%</span></dd>
          </div>
        </dl>
        <a className="text-link" href={ETHERSCAN_URL} target="_blank" rel="noopener noreferrer">
          See the current supply on Etherscan <RiArrowRightUpLine aria-hidden="true" />
        </a>
      </figure>

      <div className="mechanism__split reveal">
        <div className="mechanism__copy">
          <h3>Burning and minting</h3>
          <p>Every trade adjusts the supply. A sell to the reserve burns tokens from the reserve, and a buy from the reserve mints tokens into it. Both are sized from the last two transactions, and burning runs at about twice the rate of minting.</p>
          <div className="formula">
            <p><span>Burn</span><code>total ÷ (4 × log₁₀ total)</code></p>
            <p><span>Mint</span><code>total ÷ (8 × log₁₀ total)</code></p>
          </div>
          <p className="mechanism__note">Totals below 1 use e<sup>total</sup> in place of the logarithm.</p>
          <a className="text-link" href={BURNING_URL} target="_blank" rel="noopener noreferrer">
            Read about token burning <RiArrowRightUpLine aria-hidden="true" />
          </a>
        </div>

        <div className="data-table-wrap">
          <table className="data-table">
            <caption>Worked examples</caption>
            <thead>
              <tr>
                <th scope="col">Total</th>
                <th scope="col">Burned on a sell</th>
                <th scope="col">Minted on a buy</th>
              </tr>
            </thead>
            <tbody>
              {WORKED_EXAMPLES.map(({ total, burn, burnShare, mint, mintShare }) => (
                <tr key={total}>
                  <th scope="row">{total}</th>
                  <td>{burn} <span>{burnShare}</span></td>
                  <td>{mint} <span>{mintShare}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mechanism__split reveal">
        <div className="mechanism__copy">
          <h3>Network Based Burning</h3>
          <p>A good token is backed by a strong network. As the Dynamic Network grows, burns occur based on the number of wallets joining. Each burn is half the size of the last, and the wait for the next one doubles.</p>
          <p className="mechanism__note">Burns stop if supply reaches the 21M minimum. The counter also adds a wallet that returns from a zero balance.</p>
          <a className="text-link" href={NBB_URL} target="_blank" rel="noopener noreferrer">
            Read about Network Based Burning <RiArrowRightUpLine aria-hidden="true" />
          </a>
        </div>

        <div className="data-table-wrap">
          <table className="data-table burns">
            <caption>Burn schedule</caption>
            <thead>
              <tr>
                <th scope="col">Wallet count</th>
                <th scope="col">Tokens burned</th>
              </tr>
            </thead>
            <tbody>
              {NETWORK_BURNS.map(({ wallets, tokens }) => (
                <tr key={wallets}>
                  <th scope="row">{format(wallets)}</th>
                  <td>
                    <span className="burns__value">{format(tokens)}</span>
                    <span className="burns__track" aria-hidden="true" title={`${format(tokens)} tokens burned at ${format(wallets)} wallets`}>
                      <span style={{ width: `${(tokens / NETWORK_BURNS[0].tokens) * 100}%` }} />
                    </span>
                  </td>
                </tr>
              ))}
              <tr>
                <th scope="row">…</th>
                <td><span className="burns__value">Halving continues</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default Mechanism;
