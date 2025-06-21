import React from "react";
import "./MobileDrawer.css";
import { useLocation } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import avatar from "../../assets/avatar.png";
import blackCloseIcon from "../../assets/black-closeicon.svg";

function MobileDrawer({ isOpen, onClose, handleAddClick }) {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  const handleDrawerContentClick = (evt) => {
    evt.stopPropagation();
  };

  return (
    <div
      className={`mobile-drawer__overlay ${isOpen ? "active" : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`mobile-drawer ${isOpen ? "open" : ""}`}
        onClick={handleDrawerContentClick}
      >
        <button
          onClick={onClose}
          className="mobile-drawer__close-btn"
          aria-label="Close menu"
        >
          <img src={blackCloseIcon} alt="Close icon" />
        </button>

        <div className="mobile-drawer__user">
          <p className="mobile-drawer__username">Terrence Tegegne</p>
          <img src={avatar} alt="Avatar" className="mobile-drawer__avatar" />
        </div>

        <button
          className={`mobile-drawer__add-clothes-btn ${isProfilePage ? "mobile-drawer__add-clothes-btn_profile" : ""}`}
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
        {isProfilePage && (
          <div className="mobile-drawer__toggle-wrapper">
            <ToggleSwitch />
            </div>
        )}
      </div>
    </div>
  );
}

export default MobileDrawer;
