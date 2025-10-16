import type { JSX } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Decor from "./components/Decor";
import LoginForm from "./components/LoginForm";
import type { LoginValues } from "./components/LoginForm";

export default function App(): JSX.Element {
  async function handleLogin(values: LoginValues) {
    console.log("login ->", values);
  }

  return (
    <div className="page">
      <Logo />

      {/* Üst sağ About / Contact */}
      <nav className="top-nav">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Sol görsel */}
      <Decor />

      {/* Sağ login */}
      <LoginForm onSubmit={handleLogin} title="Login" />
    </div>
  );
}
