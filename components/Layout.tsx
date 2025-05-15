import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#0070f3',
          padding: '0.5rem 1rem',
          display: 'flex',
          gap: '1rem',
          zIndex: 1000,
          alignItems: 'center',
          height: '3rem',
        }}
      >
        <Link href="/" title="Home">
          <span style={{ color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🏠 <span>Home</span>
          </span>
        </Link>
        <Link href="/docs/upload" title="Editor">
          <span style={{ color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ✏️ <span>Editor</span>
          </span>
        </Link>
        <Link href="/docs/view" title="View">
          <span style={{ color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📄 <span>View</span>
          </span>
        </Link>
      </nav>

      <main style={{ paddingTop: '3rem' }}>{children}</main>
    </>
  )
}
