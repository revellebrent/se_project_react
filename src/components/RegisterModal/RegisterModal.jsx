import React, { useState, useEffect } from "react";
import "./RegisterModal.css";
import registerCloseIcon from "../../assets/close-icon.png";

function RegisterModal({ isOpen, onClose, onRegister, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name, avatar });
  };

  const isFormValid = email && password && name && avatar;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("register-modal")) {
      onClose();
    }
  };

  return (
    <div className={`register-modal ${isOpen ? "register-modal--open" : ""}`}
    onClick={handleOverlayClick}
    >
      <div className="register-modal-content"
      onClick={(e) => e.stopPropagation()}>
        <button className="register-modal-close" onClick={onClose} aria-label="Register Modal Close">
          <img src={registerCloseIcon} alt="Close" />
        </button>
        <h2 className="register-modal-title">Sign Up</h2>
        <form className="register-modal__form" onSubmit={handleSubmit}>
          <label className="register-modal__label">
            Email*
            <input
              type="email"
              className="register-modal__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="register-modal__label">
            Password*
            <input
              type="password"
              className="register-modal__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label className="register-modal__label">
            Name*
            <input
              type="text"
              className="register-modal__input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="register-modal__label">
            Avatar URL*
            <input
              type="text"
              className="register-modal__input"
              placeholder="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
            />
          </label>

          <div className="register-modal__actions">
            <button type="submit" className="register-modal__submit" disabled={!isFormValid}>
              Sign Up
            </button>
            <button
            type="button"
            className="register-modal__alt-action"
            onClick={onSwitchToLogin}
            >
              or Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;