import Image from 'next/image';
import { useState } from 'react';

export default function WalletPopup({ onClose }: { onClose: () => void }) {
  const connectWallet = (type: string) => {
    alert(`Connecting to ${type} wallet...`);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#222', padding: '2rem', borderRadius: '10px',
        color: '#ccc', textAlign: 'center', width: '300px'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Select a Wallet</h3>

        <button onClick={() => connectWallet('MetaMask')} style={btnStyle}>
          <Image src="https://cryptologos.cc/logos/metamask-fox-logo.png?v=026" alt="MetaMask" width={20} height={20} />
          MetaMask
        </button>

        <button onClick={() => connectWallet('Coinbase')} style={btnStyle}>
          <Image src="https://cryptologos.cc/logos/coinbase-coinbase-logo.png?v=026" alt="Coinbase" width={20} height={20} />
          Coinbase
        </button>

        <button onClick={() => connectWallet('WalletConnect')} style={btnStyle}>
          🌐 WalletConnect
        </button>

        <button onClick={onClose} style={{ ...btnStyle, marginTop: '1rem', backgroundColor: '#f00' }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  backgroundColor: '#0070f3',
  color: 'white',
  padding: '0.5rem 1rem',
  margin: '0.4rem 0',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  justifyContent: 'center',
  fontSize: '1rem'
};
