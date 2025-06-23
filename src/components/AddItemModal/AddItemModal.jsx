import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import useModalClose from "../../hooks/useModalClose";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
  isLoading,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useModalClose(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      // Reset the form values when the modal opens
      setValues({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoading) {
      onAddItemModalSubmit(values).catch((error) => {
        console.error("Error adding item:", error);
      });
    }
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText={isLoading ? "Saving..." : "Add garment"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      disabled={isLoading}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          value={values.name}
          disabled={isLoading}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          required
          onChange={handleChange}
          value={values.imageUrl}
          disabled={isLoading}
        />
      </label>

      <fieldset className="modal__radio-buttons" disabled={isLoading}>
        <legend className="modal__legend">Select the weather type:</legend>
        {["hot", "warm", "cold"].map((weatherType) => (
          <label
            key={weatherType}
            htmlFor={weatherType}
            className="modal__label modal__label_type_radio"
          >
            <input
              id={weatherType}
              type="radio"
              name="weather"
              className="modal__radio-input"
              value={weatherType}
              onChange={handleChange}
              checked={values.weather === weatherType}
              disabled={isLoading}
            />
            {weatherType.charAt(0).toUpperCase() + weatherType.slice(1)}
          </label>
        ))}
      </fieldset>
    </ModalWithForm>
  );
}
