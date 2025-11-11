// src/pages/About.tsx
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

export default function About() {
    const nav = useNavigate();
    const right = (
        <div className="panel">
            <h2>About</h2>
            <p style={{color:"var(--muted)"}}>
                <strong>IT4US</strong> is a learning & productivity initiative. The
                <strong> TODO Project</strong> showcases modern full-stack practices:
                React + Vite UI, secure JWT authentication, and a Spring Boot API with H2/PostgreSQL.
            </p>
            <p style={{marginTop:10, color:"var(--muted)"}}>
                The goal is a clean, fast and accessible task manager you can extend for coursework and
                real projects.
            </p>
            <div className="actions" style={{marginTop:18}}>
                <button className="btn secondary" onClick={() => nav(-1)}>Back</button>
            </div>
        </div>
    );
    return <PageShell left={<Hero />} right={right} />;
}
