// src/components/PageShell.tsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Theme.css";

type Props = {
    left?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;
};

export default function PageShell({ left, right, children }: Props) {
    const nav = useNavigate();

    return (
        <div className="page">
            <div className="navbar">
                <div className="navbar__inner">
                    <button
                        className="brand brand-btn"
                        onClick={() => nav("/home")}
                        aria-label="Home"
                        type="button"
                    >
                        IT4US TODO
                    </button>

                    <div style={{ flex: 1 }} />

                    <nav className="toplinks">
                        <NavLink to="/about"   className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                        <NavLink to="/login"   className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
                        <NavLink to="/signup"  className={({ isActive }) => (isActive ? "active" : "")}>Create Account</NavLink>
                        <NavLink to="/forgot"  className={({ isActive }) => (isActive ? "active" : "")}>Forgot</NavLink>
                        <NavLink to="/home"    className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                    </nav>
                </div>
            </div>

            <main className="stage">
                {left || right ? (
                    <>
                        <section>{left}</section>
                        <aside>{right}</aside>
                    </>
                ) : (
                    children
                )}
            </main>

            <button
                className="privacy-fab"
                onClick={() => nav("/privacy")}
                aria-label="Privacy Policy"
                type="button"
            >
                Privacy Policy
            </button>
        </div>
    );
}
