import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import useModalClose from "../../hooks/useModalClose";

export default function EditProfileModal({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
  currentUser,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    about: "",
  });

  useModalClose(isOpen, onClose);

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      onUpdateUser(values).catch((error) => {
        console.error("Error updating user:", error);
      });
    }
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Change profile data"
      name="edit-profile"
      buttonText={isLoading ? "Saving..." : "Save"}
      onSubmit={handleSubmit}
      disabled={isLoading}
      values={values}
      handleChange={handleChange}
    >
      <label htmlFor="name" className="edit-profile__label">
        Name *
        <input
          type="text"
          id="name"
          name="name"
          className="edit-profile__input"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name || ""}
          onChange={handleChange}
          disabled={isLoading}
        />
      </label>
      <label htmlFor="avatar" className="edit-profile__label">
        Avatar  *
        <input
          type="url"
          id="avatar"
          name="avatar"
          className="edit-profile__input"
          placeholder="Avatar URL"
          required
          value={values.avatar || ""}
          onChange={handleChange}
          disabled={isLoading}
        />
      </label>
    </ModalWithForm>
  );
}