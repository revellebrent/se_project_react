import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import Header from "../Header/Header";

import "./Profile.css";

function Profile({ onCardClick, onAddClick, clothingItems, currentUser, onSignOut }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar currentUser={currentUser} onSignOut={onSignOut} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default Profile;
