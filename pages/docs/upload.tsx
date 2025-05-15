import { useState } from 'react';
import { storeFiles } from '../../lib/ipfs';
import NavBar from '../../components/NavBar';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [cid, setCid] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert('Please select a file.');

    const metadata = {
      title,
      description,
      tags: tags.split(',').map(t => t.trim()),
    };

    const fileWithMetadata = new File(
      [new Blob([JSON.stringify({ metadata, fileName: file.name })], { type: 'application/json' })],
      `${file.name}.json`,
      { type: 'application/json' }
    );

    const cid = await storeFiles(fileWithMetadata);
    setCid(cid);
  };

  return (
    <div style={{ backgroundColor: 'black', color: '#ccc', minHeight: '100vh' }}>
      <NavBar />
      <h2 style={{ marginTop: '1rem', textAlign: 'center' }}>Upload Document</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '1rem auto', gap: '1rem' }}>
        <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} style={inputStyle} />
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={inputStyle} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} style={inputStyle} />
        <button type="submit" style={submitStyle}>Upload</button>
      </form>
      {cid && <p style={{ textAlign: 'center' }}>✅ Uploaded to IPFS: <a href={`https://ipfs.io/ipfs/${cid}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0ff' }}>{cid}</a></p>}
    </div>
  );
}

const inputStyle = {
  backgroundColor: '#222',
  color: '#0ff',
  border: 'none',
  padding: '0.5rem'
};

const submitStyle = {
  backgroundColor: '#0070f3',
  color: 'white',
  padding: '0.75rem',
  border: 'none',
  cursor: 'pointer'
};
