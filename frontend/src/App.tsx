// App.tsx
import { useEffect, useState } from 'react'
import type { JSX } from 'react'   // <-- ekle

type Health = { status: string; message?: string }

export default function App(): JSX.Element {
    const [health, setHealth] = useState<Health | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/health')
            .then((r) => {
                if (!r.ok) throw new Error('HTTP ' + r.status)
                return r.json() as Promise<Health>
            })
            .then(setHealth)
            .catch((err) => setError(err.message))
    }, [])

    return (
        <main style={{ fontFamily: 'system-ui', padding: 24 }}>
            <h1>IT4US TODO</h1>
            <p>Backend health: {health ? health.status : (error ? `error: ${error}` : 'loading...')}</p>
        </main>
    )
}
