import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";

export default function Home() {
    const right = (
        <div className="panel">
            <h2>IT4US TODO</h2>
            <p style={{color:"var(--muted)"}}>
                Plan, track and deliver with boards, lists and cards. Collaborate in real-time.
            </p>

            <div style={{display:"grid", gap:12, margin:"14px 0"}}>
                <Link className="btn" to="/login" style={{textDecoration:"none", textAlign:"center"}}>Login</Link>
                <Link className="btn secondary" to="/signup" style={{textDecoration:"none", textAlign:"center"}}>
                    Create New Account
                </Link>
            </div>

            {/* Features */}
            <div className="features">
                <div className="feat-card">
                    <div className="feat-icon" aria-hidden>
                        {/* Bolt icon */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="feat-body">
                        <div className="feat-title">Lightning UI</div>
                        <div className="feat-text">Blazing Vite + React for instant feedback.</div>
                    </div>
                </div>

                <div className="feat-card">
                    <div className="feat-icon" aria-hidden>
                        {/* Shield icon */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="feat-body">
                        <div className="feat-title">JWT Auth</div>
                        <div className="feat-text">Modern login, strong password rules, reset flow.</div>
                    </div>
                </div>

                <div className="feat-card">
                    <div className="feat-icon" aria-hidden>
                        {/* Layout icon */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <rect x="3" y="11" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <rect x="15" y="11" width="6" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="feat-body">
                        <div className="feat-title">Clean boards</div>
                        <div className="feat-text">Focus on tasks with a minimal, friendly layout.</div>
                    </div>
                </div>
            </div>


            <div className="note-card">
                <strong>Tip:</strong> You can explore freely — dev server runs on <code>localhost</code>.
            </div>
        </div>
    );

    return <PageShell left={<Hero />} right={right} />;
}
