import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {

  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="item-card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
