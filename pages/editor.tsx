import { useRouter } from 'next/router'

export default function Editor() {
  const router = useRouter()

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <button onClick={() => router.push('/docs')}>View Documents</button>
        <button onClick={() => router.push('/')}>Home</button>
      </div>

      {/* Your editor content below */}
      <h2>Document Editor</h2>
      {/* ... rest of your editor UI ... */}
    </div>
  )
}
