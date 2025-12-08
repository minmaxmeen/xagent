import { useEffect, useState } from 'react'

export default function Home() {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001'
    fetch(`${api}/api/hello`)
      .then((r) => r.json())
      .then((d) => setMsg(d.message || JSON.stringify(d)))
      .catch(() => setMsg('Could not reach backend'))
  }, [])

  return (
    <main style={{fontFamily: 'sans-serif', padding: 24}}>
      <h1>XAgent Frontend (Next.js)</h1>
      <p><strong>Backend message:</strong> {msg}</p>
      <p>This app reads the backend URL from <code>NEXT_PUBLIC_API_URL</code>.</p>
    </main>
  )
}
