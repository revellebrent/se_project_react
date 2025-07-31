import { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import  CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({ onCardClick, onAddClick, clothingItems, onCardLike }) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
  const currentUser = useContext(CurrentUserContext);

 const filteredItems = isProfilePage && currentUser
    ? clothingItems.filter(item => item.owner === currentUser._id)
    : clothingItems;

  return (
    <div className="clothes-section">
      <div className={`clothes-section__header ${isProfilePage ? "clothes-section__header-profile" : ""}`}>
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-btn" onClick={onAddClick}>+ Add new</button>
      </div>
      <ul className={`clothes-section__items ${isProfilePage ? "clothes-section__items-profile" : ""}`} aria-label="clothing items">
        {filteredItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
