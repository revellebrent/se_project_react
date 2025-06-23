import "./ItemModal.css";
import closeWhiteIcon from "../../assets/white-closeicon.png";
import useModalClose from "../../hooks/useModalClose";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  useModalClose(isOpen, onClose);

  return (
    <div
      className={`modal modal_type_image ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="item-modal__close"
          aria-label="Close modal"
        >
          <img
            src={closeWhiteIcon}
            alt="close icon"
            className="item-modal__close-icon"
          />
        </button>
        <img
          src={card.imageUrl || card.link}
          alt={card.name}
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__footer-top">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              className="modal__delete-btn"
              onClick={() => onDelete(card)}
            >
              Delete item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
