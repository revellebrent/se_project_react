import { useEffect } from "react";
import "./ItemModal.css";
import closeWhiteIcon from "../../assets/white-closeicon.png";

function ItemModal({ activeModal, onClose, card }) {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") onClose();
    };

    if (activeModal === "preview") {
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
    <div
      className={`modal ${activeModal === "preview" && "modal_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        >
          <img
            src={closeWhiteIcon}
            alt="close icon"
            className="modal__close-icon"
          />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
