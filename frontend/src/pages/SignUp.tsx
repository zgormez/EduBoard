import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import { EMAIL, PASSWORD, USERNAME } from "../validation";
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail]     = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm]   = useState("");
    const [err, setErr]   = useState<string | null>(null);
    const [msg, setMsg]   = useState<string | null>(null);

    const validate = () => {
        if (username && !USERNAME.test(username)) return "Please enter a valid username";
        if (!EMAIL.test(email)) return "Please enter a valid email address";
        if (!PASSWORD.test(password)) return "Please enter a valid password";
        if (password !== confirm) return "Passwords does not match";
        return null;
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault(); setErr(null); setMsg(null);
        const v = validate(); if (v) return setErr(v);
        try {
            await api.signup({ username: username || undefined, email, password, confirmPassword: confirm });
            setMsg("Check your email for the login link.");
        } catch (e:any) { setErr(e.message); }
    };

    const right = (
        <div className="panel">
            <h2>Create New Account</h2>
            {err && <div className="error">{err}</div>}
            {msg && <div className="ok">{msg}</div>}

            <form onSubmit={submit}>
                <div className="field">
                    <label>Username (optional)</label>
                    <input className="input" value={username} onChange={e=>setUsername(e.target.value)} />
                    <small style={{color:'var(--muted)'}}>Starts with a letter; 4–15; letters/digits; single underscore.</small>
                </div>

                <div className="field">
                    <label>Email</label>
                    <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <small style={{color:'var(--muted)'}}>8–15, at least 1 uppercase, 1 lowercase, 1 digit, 1 symbol.</small>
                </div>

                <div className="field">
                    <label>Confirm Password</label>
                    <input className="input" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} />
                </div>

                <button className="btn">Send</button>
            </form>

            <div className="actions">
                <Link className="link" to="/login">Login</Link>
            </div>
        </div>
    );

    return <PageShell left={<Hero variant="auth" />} right={right} />;
}
