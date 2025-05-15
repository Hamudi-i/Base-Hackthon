import Link from 'next/link';
import { useState } from 'react';
import WalletPopup from './WalletPopup';

export default function NavBar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav style={{ backgroundColor: '#0070f3', padding: '0.5rem 1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link href="/" style={linkStyle}>🏠 Home</Link>
        <Link href="/docs/upload" style={linkStyle}>✏️ Editor</Link>
        <Link href="/docs/view" style={linkStyle}>📄 View</Link>
        <button onClick={() => setShowPopup(true)} style={buttonStyle}>🔐 Connect Wallet</button>
      </nav>
      {showPopup && <WalletPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

const linkStyle = {
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  textDecoration: 'none'
};

const buttonStyle = {
  backgroundColor: '#0ff',
  border: 'none',
  padding: '0.5rem 1rem',
  color: 'black',
  cursor: 'pointer',
  marginLeft: 'auto'
};
