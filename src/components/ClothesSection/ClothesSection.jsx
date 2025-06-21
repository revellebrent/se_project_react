import { useLocation } from "react-router-dom";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems }) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <div className="clothes-section">
      <div className={`clothes-section__header ${isProfilePage ? "clothes-section__header-profile" : ""}`}>
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-btn">+ Add new</button>
      </div>
      <ul className={`clothes-section__items ${isProfilePage ? "clothes-section__items-profile" : ""}`} aria-label="clothing items">
        {clothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
