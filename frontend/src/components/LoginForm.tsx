import React, { useState } from "react";

export type LoginValues = {
  email: string;
  password: string;
  confirmPassword: string;
  remember: boolean;
};

type Props = {
  onSubmit?: (values: LoginValues) => void | Promise<void>;
  floating?: boolean;
  title?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const LoginForm: React.FC<Props> = ({
  onSubmit,
  floating = true,
  title = "Login",
}) => {
  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
    confirmPassword: "",
    remember: true,
  });
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  function validate(v: LoginValues) {
    const e: typeof errors = {};

    if (!v.email) e.email = "Email is required";
    else if (!emailRegex.test(v.email)) e.email = "Please enter a valid email";

    if (!v.password) e.password = "Password is required";
    else if (v.password.length < 6) e.password = "Minimum 6 characters";

    // ✅ Confirm password kontrolleri
    if (!v.confirmPassword) {
      e.confirmPassword = "Please confirm your password";
    } else if (v.password !== v.confirmPassword) {
      e.confirmPassword = "Passwords do not match";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate(values)) return;
    try {
      setLoading(true);
      await onSubmit?.(values);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className={`lf-wrapper ${floating ? "lf-floating" : ""}`}>
      <form className="lf-form" onSubmit={handleSubmit} noValidate>
        <h2 className="lf-heading">{title}</h2>

        {/* Email */}
        <label className="lf-label">
          <span className="lf-caption">EMAIL</span>
          <input
            className={`lf-input ${errors.email ? "lf-input-error" : ""}`}
            type="email"
            placeholder="example@site.com"
            value={values.email}
            onChange={(e) =>
              setValues((s) => ({ ...s, email: e.target.value }))
            }
            autoComplete="email"
          />
          {errors.email && <small className="lf-error">{errors.email}</small>}
        </label>

        {/* Password */}
        <label className="lf-label">
          <span className="lf-caption">PASSWORD</span>
          <div className="lf-password-box">
            <input
              className={`lf-input ${
                errors.password ? "lf-input-error" : ""
              }`}
              type={showPw ? "text" : "password"}
              placeholder="••••••••"
              value={values.password}
              onChange={(e) =>
                setValues((s) => ({ ...s, password: e.target.value }))
              }
              autoComplete="new-password"
            />
            <button
              type="button"
              className="lf-eye-btn"
              onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && (
            <small className="lf-error">{errors.password}</small>
          )}
        </label>

        {/* Confirm Password */}
        <label className="lf-label">
          <span className="lf-caption">CONFIRM PASSWORD</span>
          <div className="lf-password-box">
            <input
              className={`lf-input ${
                errors.confirmPassword ? "lf-input-error" : ""
              }`}
              type={showPw ? "text" : "password"}
              placeholder="••••••••"
              value={values.confirmPassword}
              onChange={(e) =>
                setValues((s) => ({ ...s, confirmPassword: e.target.value }))
              }
              autoComplete="new-password"
            />
          </div>
          {errors.confirmPassword && (
            <small className="lf-error">{errors.confirmPassword}</small>
          )}
        </label>

        <a className="lf-link-forgot" href="#">
          Forgot Password?
        </a>

        <button
          className="lf-btn lf-btn-login"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in…" : "Login"}
        </button>

        <div className="lf-divider">
          <span>New Account</span>
        </div>

        <button className="lf-btn lf-btn-signup" type="button">
          Sign Up
        </button>
      </form>
    </aside>
  );
};

export default LoginForm;
