import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: '#ccc', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '2rem' }}>Welcome to Decentralized Notion 📚</h1>
        <p>Create and access your documents securely on IPFS.</p>
      </div>
    </div>
  );
}
