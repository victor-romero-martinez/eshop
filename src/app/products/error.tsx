'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string },
  reset: () => void
}) {
  return (
    <main className="container padding" style={{
      height: "60vh",
      display: 'grid',
      placeItems: 'center'
    }}>
      <div>
        <h1>Failed request</h1>
        <button onClick={() => reset()} style={{
          padding: '4px 12x',
          borderRadius: 'var(--border)',
          border: '2px solid #22276e',
          cursor: 'pointer'
        }}>Try again</button>
      </div>
    </main>
  )
};