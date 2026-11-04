// Single place for every link and published figure on the site.
// Figures come from the Dynamic Network whitepaper and Network Based Burning paper.

export const CONTRACT_ADDRESS = '0x86632544e69c8019babd01be75393f9c2d46ee70';
export const ETHERSCAN_URL = `https://etherscan.io/token/${CONTRACT_ADDRESS}`;
export const SWAP_URL = `https://app.uniswap.org/swap?chain=mainnet&inputCurrency=ETH&outputCurrency=${CONTRACT_ADDRESS}`;

export const WHITEPAPER_URL = 'https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub';
export const BURNING_URL = 'https://docs.google.com/document/d/e/2PACX-1vR_LcCdc9HBBLpmufoHLqPKs38zFeYzZPp0fo8Q2UNXhgq_K3UKM0oushG7lN1D4Bh_TF4Sjh_ueFOu/pub';
export const OVERVIEW_URL = 'https://docs.google.com/document/d/e/2PACX-1vTO-bSLRZ9AKnrrPIGwdw7f3Aa7R86yWA7T56fITJ2LObRU-X1-FozsnJr5FeJ3NweH5F1A_YEyqeE7/pub';
export const NBB_URL = 'https://docs.google.com/document/d/e/2PACX-1vTLgagJ4YEUFDJajGyl3SYT9tbbfLIvdq8e8Bj7qsK3IqAgdk0KUlK8b6LD_ejYawL6gdL91a4F-Hgq/pub';

export const DISCORD_URL = 'https://discord.gg/2d7PNevWJv';
export const GITHUB_URL = 'https://github.com/Dynamic-Network';
export const MEDIUM_URL = 'https://dynamic-network.medium.com/';
export const TWITTER_URL = 'https://twitter.com/DynamicN3twork';
export const EMAIL = 'hello@dynamicnetworktoken.com';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'How it works', href: '#mechanism' },
  { label: 'Research', href: '#research' },
  { label: 'Token', href: '#token' },
  { label: 'Docs', href: '#docs' },
];

export const STATS = [
  { value: '42M', label: 'Starting supply' },
  { value: '52.5M', label: 'Maximum supply' },
  { value: '21M', label: 'Minimum supply' },
  { value: '2:1', label: 'Burn-to-mint ratio' },
];

export const PILLARS = [
  {
    title: 'Research',
    text: 'Behind the idea of a self-regulating means of exchange lies a deep dive in computer science: the quantity theory of money, simulations using geometric Brownian motion, and regression models to read the results.',
  },
  {
    title: 'Knowledge-based',
    text: 'The research yielded insights into deflation and self-regulation. In all 15 simulated iterations, burning and minting produced lower volatility than a token without them.',
  },
  {
    title: 'Vision',
    text: 'Fair means of exchange can restore broken trust between parties. Transacting should be an event where everyone gains, and not transacting shouldn’t reduce purchasing power.',
  },
];

export const WORKED_EXAMPLES = [
  { total: '5', burn: '1.79', burnShare: '35.8%', mint: '0.89', mintShare: '17.9%' },
  { total: '50', burn: '7.36', burnShare: '14.7%', mint: '3.68', mintShare: '7.4%' },
  { total: '500', burn: '46.31', burnShare: '9.3%', mint: '23.16', mintShare: '4.6%' },
];

export const NETWORK_BURNS = [
  { wallets: 100, tokens: 1000000 },
  { wallets: 200, tokens: 500000 },
  { wallets: 400, tokens: 250000 },
  { wallets: 800, tokens: 125000 },
];

// Averages over 15 simulated iterations, as published in the whitepaper.
export const RESEARCH_METRICS = [
  {
    name: 'Volatility (σ)',
    note: 'Average standard deviation. Lower is steadier.',
    regulated: 0.38645927,
    unregulated: 0.44774127,
  },
  {
    name: 'Regression fit (R²)',
    note: 'How closely price follows a straight trend. Higher is more linear.',
    regulated: 0.86087427,
    unregulated: 0.20929631,
  },
  {
    name: 'Regression error (RMSE)',
    note: 'Spread of price around that trend. Lower is tighter.',
    regulated: 0.03197488,
    unregulated: 0.14663563,
  },
];

export const TOKEN_FACTS = [
  {
    title: 'Governed by its community',
    text: 'Every change in the network is decided within the community.',
  },
  {
    title: 'No large early investors',
    text: 'The project chose not to onboard any large early investors.',
  },
  {
    title: 'Verified on Etherscan',
    text: 'The contract’s source code is published and verified, so anyone can read it.',
  },
];

export const DOCS = [
  {
    tag: 'Research & results',
    title: 'Dynamic Network Whitepaper',
    text: 'Deep dive into the core of the Dynamic Network: the method, the simulations and the results.',
    href: WHITEPAPER_URL,
  },
  {
    tag: 'Burning & minting',
    title: 'Token Burning',
    text: 'The mechanisms behind the dynamic burning and minting.',
    href: BURNING_URL,
  },
  {
    tag: 'Overview',
    title: '$DNT Overview',
    text: 'An overview of the token and the project.',
    href: OVERVIEW_URL,
  },
  {
    tag: 'Deflationary mechanism',
    title: 'Network Based Burning',
    text: 'How network growth adds further deflation.',
    href: NBB_URL,
  },
  {
    tag: 'Blog',
    title: 'Dynamic Network Blog',
    text: 'Follow updates and events in the network.',
    href: MEDIUM_URL,
  },
];
