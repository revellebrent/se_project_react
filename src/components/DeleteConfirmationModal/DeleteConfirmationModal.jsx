import "./DeleteConfirmationModal.css";
import closeIconGrey from "../../assets/close-icon.png";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`delete-modal ${isOpen ? "delete-modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        className="delete-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="delete-modal__close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close delete confirmation modal"
        >
          <img
            src={closeIconGrey}
            alt="Close"
            className="delete-modal__close-icon"
          />
        </button>
        <div className="delete-modal__text-container">
          <p className="delete-modal__text">
            Are you sure you want to delete this item?
          </p>
          <p className="delete-modal__text">This action is irreversible.</p>
        </div>
        <div className="delete-modal__btns">
          <button
            className="delete-modal__confirm-btn"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Yes, delete item
          </button>
          <button className="delete-modal__cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
