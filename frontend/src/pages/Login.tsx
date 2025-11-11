import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const nav = useNavigate();

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null);
        try {
            const { token } = await api.login({ email, password });
            localStorage.setItem("token", token);
            nav("/home");
        } catch {
            setErr("Your email or password is incorrect. Please try again.");
        }
    };

    const right = (
        <div className="panel">
            <h2>Login</h2>
            {err && <div className="error">{err}</div>}

            <form onSubmit={submit}>
                <div className="field">
                    <label>Email</label>
                    <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                </div>

                <button className="btn" type="submit">Login</button>
            </form>

            <div className="actions">
                <Link className="link" to="/forgot">Forgot Password?</Link>
                <Link className="link" to="/signup">New Account</Link>
            </div>

            <div className="note-card">
                <strong>Welcome back!</strong>
                <p style={{margin:'6px 0 0', color:'var(--muted)'}}>Use the email and password you signed up with.</p>
            </div>
        </div>
    );

    return <PageShell left={<Hero variant="auth" />} right={right} />;
}
