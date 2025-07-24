// app/page.tsx

export default function HomePage() {
  return (
    <main
      style={{
        padding: '3rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        🚀 Supabase Pause Prevention
      </h1>

      <p style={{ fontSize: '1.2rem', color: '#333' }}>
        This project keeps your Supabase project alive by pinging it frequently.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <a
          href="/api/keep-alive"
          style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          🔁 Check Keep-Alive API
        </a>
      </div>

      <footer style={{ marginTop: '4rem', color: '#777', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Ankrit’s Supabase Keeper. All rights reserved.
      </footer>
    </main>
  )
}
