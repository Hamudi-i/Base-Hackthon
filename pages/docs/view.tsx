import NavBar from '../../components/NavBar';

export default function ViewDocuments() {
  return (
    <div style={{ backgroundColor: 'black', color: '#ccc', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
        <h2>View Documents</h2>
        <p>This is where documents will be listed for viewing.</p>
      </div>
    </div>
  );
}
