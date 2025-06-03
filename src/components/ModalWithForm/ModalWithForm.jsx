import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.png";

function ModalWithForm({
   children,
   buttonText,
   title,
   activeModal,
   handleCloseClick,
 }) {
   return (
   <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
    <div className="modal__content">
      <h2 className="modal__title">{title}</h2>
      <button
      onClick={handleCloseClick}
      type="button"
      className="modal__close"
      aria-label="Close modal">
        <img src={closeIcon} alt="close icon" className="modal__close-icon" />
         </button>
   <form className="modal__form">
      {children}
         <button type="submit" className="modal__submit">
          {buttonText}
         </button>
   </form>
   </div>
   </div>
   );
}

export default ModalWithForm;