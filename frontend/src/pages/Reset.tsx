import { useState } from "react";
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import { PASSWORD } from "../validation";

export default function Reset() {
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [msg, setMsg] = useState<string | null>(null);
    const [err, setErr] = useState<string | null>(null);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null); setMsg(null);
        if (!PASSWORD.test(p1)) { setErr("Please enter a valid password"); return; }
        if (p1 !== p2) { setErr("Passwords does not match"); return; }
        try {
            // await api.reset({ token, password: p1 });
            setMsg("Password updated. You can login now.");
        } catch {
            setErr("Something went wrong. Please try again.");
        }
    };

    const right = (
        <div className="panel">
            <h2>Create New Password</h2>
            {err && <div className="error">{err}</div>}
            {msg && <div className="ok">{msg}</div>}

            <form onSubmit={submit}>
                <div className="field">
                    <label>New Password</label>
                    <input className="input" type="password" value={p1} onChange={e=>setP1(e.target.value)} />
                    <small style={{color:"var(--muted)"}}>8–15, at least 1 uppercase, 1 lowercase, 1 digit, 1 symbol.</small>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input className="input" type="password" value={p2} onChange={e=>setP2(e.target.value)} />
                </div>
                <button className="btn">Send &amp; Login</button>
            </form>
        </div>
    );

    return <PageShell left={<Hero variant="auth" />} right={right} />;
}
