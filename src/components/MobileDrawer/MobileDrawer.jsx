import React from "react";
import "./MobileDrawer.css";
import avatar from "../../assets/avatar.png";
import blackCloseIcon from "../../assets/black-closeicon.svg";

function MobileDrawer({ isOpen, onClose, handleAddClick }) {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

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
          className="mobile-drawer__add-clothes-btn"
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
      </div>
    </div>
  );
}

export default MobileDrawer;
