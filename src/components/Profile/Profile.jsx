import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import Header from "../Header/Header";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Profile.css";

function Profile({ onCardClick, onAddClick, clothingItems, onSignOut, onEditProfileClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
        onSignOut={onSignOut}
        onEditProfileClick={onEditProfileClick}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          clothingItems={clothingItems}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
