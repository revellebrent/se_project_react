import React, { useEffect } from "react";
import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.png";

function ModalWithForm({
   children,
   buttonText,
   title,
   activeModal,
   onClose,
 }) {

  useEffect(() => {
    const handleKeyDown = (evt) => {
          if (evt.key === "Escape") onClose();
  };

  if (activeModal === "add-garment") {
    window.addEventListener("keydown", handleKeyDown);
  }

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [activeModal, onClose]);

const handleOverlayClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    onClose();
  }
};


   return (
   <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}
   onClick={handleOverlayClick}
   >
    <div className="modal__content"
    onClick={(evt) => evt.stopPropagation()}
    >
      <h2 className="modal__title">{title}</h2>
      <button
      onClick={onClose}
      type="button"
      className="modal__close"
      aria-label="Close modal">
        <img
        src={closeIcon}
        alt="close icon"
        className="modal__close-icon" />
         </button>
   <form className="modal__form">
      {children}
         <button
         type="submit"
         className="modal__submit">
          {buttonText}
         </button>
   </form>
   </div>
   </div>
   );
}

export default ModalWithForm;