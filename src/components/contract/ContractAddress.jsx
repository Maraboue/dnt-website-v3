import React, { useEffect, useRef, useState } from 'react';
import { RiArrowRightUpLine, RiCheckLine, RiFileCopyLine } from 'react-icons/ri';
import { CONTRACT_ADDRESS, ETHERSCAN_URL } from '../../content';
import './contract.css';

const ContractAddress = () => {
  const [status, setStatus] = useState('idle');
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setStatus('copied');
    } catch (error) {
      setStatus('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <div className="contract">
      <span className="contract__label">Contract</span>
      <code className="contract__address" title={CONTRACT_ADDRESS}>
        <span>{CONTRACT_ADDRESS.slice(0, 6)}</span>
        <span className="contract__middle">{CONTRACT_ADDRESS.slice(6, -4)}</span>
        <span className="contract__ellipsis" aria-hidden="true">…</span>
        <span>{CONTRACT_ADDRESS.slice(-4)}</span>
      </code>
      <button type="button" className="contract__action" onClick={copy} aria-label="Copy contract address">
        {status === 'copied' ? <RiCheckLine size={18} aria-hidden="true" /> : <RiFileCopyLine size={18} aria-hidden="true" />}
      </button>
      <a className="contract__action" href={ETHERSCAN_URL} target="_blank" rel="noopener noreferrer" aria-label="View contract on Etherscan">
        <RiArrowRightUpLine size={20} aria-hidden="true" />
      </a>
      <span className="visually-hidden" role="status">
        {status === 'copied' && 'Contract address copied'}
        {status === 'failed' && 'Could not copy. Select the address to copy it manually.'}
      </span>
    </div>
  );
};

export default ContractAddress;
