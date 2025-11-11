import { useState } from "react";
import PageShell from "../components/PageShell";
import Hero from "../components/Hero";
import { EMAIL } from "../validation";

export default function Forgot() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState<string | null>(null);
    const [err, setErr] = useState<string | null>(null);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null); setMsg(null);
        if (!EMAIL.test(email)) {
            setErr("Please enter a valid email address");
            return;
        }
        try {
            // await api.forgot({ email });
            setMsg("We sent a password reset link to your email.");
        } catch {
            setErr("Something went wrong. Please try again.");
        }
    };

    const right = (
        <div className="panel">
            <h2>Forgot Password</h2>
            {err && <div className="error">{err}</div>}
            {msg && <div className="ok">{msg}</div>}

            <form onSubmit={submit}>
                <div className="field">
                    <label>Email</label>
                    <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button className="btn" type="submit">Continue</button>
            </form>

            <div className="note-card">
                <strong>Heads up:</strong> Check your spam folder if you don’t see the email.
            </div>
        </div>
    );

    return <PageShell left={<Hero variant="auth" />} right={right} />;
}
