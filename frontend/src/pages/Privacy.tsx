// src/pages/Privacy.tsx
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
    const nav = useNavigate();
    const right = (
        <div className="panel">
            <h2>Privacy Policy</h2>
            <p style={{color:"var(--muted)"}}>
                We respect your privacy. This app stores only what is needed to provide account,
                authentication and your TODO data. We never sell personal data.
            </p>
            <ul style={{marginTop:12, lineHeight:1.6}}>
                <li>Authentication data (email, password hash) to access your account.</li>
                <li>Session/JWT tokens for secure API access.</li>
                <li>Task/board content you create.</li>
                <li>Standard server logs for reliability and security.</li>
            </ul>
            <p style={{marginTop:12, color:"var(--muted)"}}>
                You can request deletion of your account and data at any time.
            </p>

            <div className="actions" style={{marginTop:18}}>
                <button className="btn secondary" onClick={() => nav(-1)}>Back</button>
            </div>
        </div>
    );
    return <PageShell left={<Hero variant="auth" />} right={right} />;
}
