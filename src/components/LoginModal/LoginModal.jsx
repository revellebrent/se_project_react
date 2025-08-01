import React, { useState, useEffect } from "react";
import "./LoginModal.css";
import loginCloseIcon from "../../assets/close-icon.png";

function LoginModal({ isOpen, onClose, onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const [loginError, setLoginError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    onLogin({ email, password })
      .catch((error) => {
        setLoginError("Invalid email or password. Please try again.");
        console.error("Login error:", error);
      });
  };

  const isFormValid = email && password;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("login-modal")) {
      onClose();
    }
  };

  return (
    <div className={`login-modal ${isOpen ? "login-modal--open" : ""}`}
    onClick={handleOverlayClick}>
      <div className="login-modal__content"
      onClick={(e) => e.stopPropagation()}>
        <button className="login-modal__close" onClick={onClose}>
          <img src={loginCloseIcon} alt="Close" />
        </button>
        <h2 className="login-modal__title">Log In</h2>

        <form className="login-modal__form" onSubmit={handleSubmit}>
          <label className="login-modal__label">
            Email
            <input
              type="email"
              className="login-modal__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="login-modal__label">
            Password
            <input
              type="password"
              className="login-modal__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {loginError && <p className="login-modal__error">{loginError}</p>}
          <div className="login-modal__actions">
            <button
              type="submit"
              className="login-modal__submit"
              disabled={!isFormValid}
            >
              Log In
            </button>
            <button
              type="button"
              className="login-modal__register"
              onClick={onSwitchToRegister}
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
