// src/components/Logo.tsx
import type { JSX } from "react";

type Props = {
  label?: string;
};

export default function Logo({ label = "IT4US TODO" }: Props): JSX.Element {
  return (
    <a
      href="/"
      aria-label="Go to login"
      style={{
        position: "fixed",   // <-- sabit
        top: 16,             // <-- sol-üst konum
        left: 16,
        zIndex: 1000,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        padding: "0 18px",
        borderRadius: 12,
        background:
          "linear-gradient(135deg, rgba(124,58,237,1) 0%, rgba(147,51,234,1) 100%)",
        color: "#fff",
        fontWeight: 700,
        letterSpacing: 0.5,
        textDecoration: "none",
        boxShadow: "0 6px 20px rgba(124,58,237,.35)",
        userSelect: "none",
      }}
    >
      {label}
    </a>
  );
}
