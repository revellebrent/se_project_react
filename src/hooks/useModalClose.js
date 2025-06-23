import { useEffect } from "react";

function useModalClose(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    const handleOverlayClick = (evt) => {
      if (evt.target.classList.contains("modal")) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [isOpen, onClose]);
}

export default useModalClose;
