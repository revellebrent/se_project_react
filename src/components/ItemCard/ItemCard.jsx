import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likedIcon from "../../assets/liked.png";
import notLikedIcon from "../../assets/not-liked.png";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    onCardLike(item);
  };

  const isLiked = item.likes?.some((id) => id === currentUser?._id);

  return (
    <li className="item-card" onClick={() => handleCardClick(item)}>
      <div className="item-card__top-bar">
        <span className="card__name">{item.name}</span>
        {currentUser && (
          <button
            className="card__like-button"
            onClick={handleLike}
            aria-label="Like button"
            >
            <img
              src={isLiked ? likedIcon : notLikedIcon}
              alt={isLiked ? "Unlike" : "Like"}
              className="card__like-icon"
            />
            </button>
          )}
      </div>
      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </li>
  );
}

export default ItemCard;
