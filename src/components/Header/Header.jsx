import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header() {
  return (
   <header className="header">
    <img className="header__logo" src={headerLogo} alt="Header logo" />
    <p className="header__date-and-location">June 15, New York</p>
    <button className="header__add-clothes-btn">+ Add clothes</button>
    <div className="header__user-container">
      <p className="header__username">Terrence Tegegne</p>
      <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
    </div>
  </header>
  );
}

export default Header;