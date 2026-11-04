import React from 'react';
import './logo.css';

const BLUE = '#4aa3e6';
const ICE = '#a6d9ea';
const LIME = '#bde34d';

const NODES = {
  top: [484, 70],
  upperLeft: [105, 288],
  centre: [484, 288],
  upperRight: [873, 288],
  midLeft: [322, 636],
  midRight: [660, 632],
  lowerLeft: [105, 708],
  lowerRight: [873, 702],
  bottom: [488, 918],
};

// [from, to, colour at "from", colour at "to", where the colour change is centred]
const EDGES = [
  ['upperLeft', 'top', ICE, BLUE, 0.35],
  ['top', 'centre', BLUE, BLUE],
  ['top', 'upperRight', BLUE, BLUE],
  ['upperLeft', 'centre', ICE, BLUE, 0.45],
  ['centre', 'upperRight', BLUE, BLUE],
  ['centre', 'midLeft', BLUE, ICE, 0.4],
  ['centre', 'midRight', BLUE, BLUE],
  ['upperRight', 'midRight', BLUE, BLUE],
  ['upperRight', 'lowerRight', BLUE, BLUE],
  ['midLeft', 'midRight', ICE, ICE],
  ['midRight', 'lowerRight', BLUE, ICE, 0.5],
  ['midRight', 'bottom', ICE, ICE],
  ['lowerRight', 'bottom', ICE, ICE],
  ['upperLeft', 'lowerLeft', LIME, LIME],
  ['upperLeft', 'midLeft', LIME, LIME],
  ['midLeft', 'bottom', LIME, LIME],
  ['lowerLeft', 'midLeft', LIME, LIME],
  ['lowerLeft', 'bottom', LIME, LIME],
];

const NODE_COLOURS = {
  top: BLUE,
  upperLeft: LIME,
  centre: BLUE,
  upperRight: BLUE,
  midLeft: LIME,
  midRight: ICE,
  lowerLeft: LIME,
  lowerRight: BLUE,
  bottom: LIME,
};

// Edges a light pulse travels along in the animated version. Each chain connects
// end to end, so the light appears to move through the network.
const PULSES = [
  ['top', 'centre', 0],
  ['centre', 'midRight', 1.2],
  ['midRight', 'bottom', 2.4],
  ['upperLeft', 'midLeft', 3.1],
  ['midLeft', 'bottom', 4.3],
  ['upperRight', 'lowerRight', 5.2],
  ['lowerLeft', 'midLeft', 6.4],
  ['midLeft', 'midRight', 7.6],
];

const x1 = (from) => NODES[from][0];
const y1 = (from) => NODES[from][1];
const x2 = (to) => NODES[to][0];
const y2 = (to) => NODES[to][1];

const Logo = ({ idPrefix, size, strokeWidth = 24, nodeRadius = 32, animated = false, className = '', title }) => (
  <svg
    className={`logo ${className}`}
    viewBox="60 25 860 940"
    width={size}
    height={size}
    role={title ? 'img' : undefined}
    aria-label={title}
    aria-hidden={title ? undefined : true}
  >
    <defs>
      {EDGES.map(([from, to, start, end, centre]) => (start === end ? null : (
        <linearGradient key={`${from}-${to}`} id={`${idPrefix}-${from}-${to}`} gradientUnits="userSpaceOnUse" x1={x1(from)} y1={y1(from)} x2={x2(to)} y2={y2(to)}>
          <stop offset={centre - 0.04} stopColor={start} />
          <stop offset={centre + 0.04} stopColor={end} />
        </linearGradient>
      )))}
    </defs>

    {EDGES.map(([from, to, start, end]) => (
      <line
        key={`${from}-${to}`}
        x1={x1(from)}
        y1={y1(from)}
        x2={x2(to)}
        y2={y2(to)}
        stroke={start === end ? start : `url(#${idPrefix}-${from}-${to})`}
        strokeWidth={strokeWidth}
      />
    ))}

    {animated && PULSES.map(([from, to, delay]) => (
      <line
        key={`pulse-${from}-${to}`}
        className="logo__pulse"
        x1={x1(from)}
        y1={y1(from)}
        x2={x2(to)}
        y2={y2(to)}
        pathLength="100"
        strokeWidth={strokeWidth + 2}
        style={{ animationDelay: `${delay}s` }}
      />
    ))}

    {Object.entries(NODES).map(([name, [cx, cy]]) => (
      <circle key={name} cx={cx} cy={cy} r={nodeRadius} fill={NODE_COLOURS[name]} />
    ))}
  </svg>
);

export default Logo;
