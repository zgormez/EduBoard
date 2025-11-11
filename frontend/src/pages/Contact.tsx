// src/pages/Contact.tsx
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const nav = useNavigate();
    const right = (
        <div className="panel">
            <h2>Contact</h2>
            <p style={{color:"var(--muted)"}}>
                Contact details will be provided in a later phase.
            </p>
            <div className="actions" style={{marginTop:18}}>
                <button className="btn secondary" onClick={() => nav(-1)}>Back</button>
            </div>
        </div>
    );
    return <PageShell left={<Hero variant="auth" />} right={right} />;
}
