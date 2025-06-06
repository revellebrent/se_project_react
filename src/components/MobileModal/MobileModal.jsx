import React from "react";
import "./MobileModal.css";
import avatar from "../../assets/avatar.png";
import closeIcon from "../../assets/close-icon.png";

function MobileModal ({ onClose, handleAddClick, isOpen }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content mobile-modal__content">
        <button
        onClick={onClose}
        type="button"
        className="modal__close"
        aria-label="Close mobile menu"
        >
          <img
          src={closeIcon}
          alt="Close icon"
          className="modal__close-icon"
          />
        </button>

        <div className="mobile-modal__user">
          <p className="mobile-modal__username">Terrence Tegegne</p>
          <img
          src={avatar}
          alt="Avatar"
          className="mobile-modal__avatar" />
        </div>

        <button
        className="mobile-modal__add-clothes-btn"
        onClick={handleAddClick}
        >
          + Add Clothes
        </button>
      </div>
    </div>
  );
}

export default MobileModal;