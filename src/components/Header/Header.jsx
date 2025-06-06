import { useState } from "react";
import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import hamburgerIcon from "../../assets/hamburger-icon.svg";
import closeIcon from "../../assets/close-icon.png";

function Header({ handleAddClick, weatherData }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

 const currentDate = new Date().toLocaleString('default', {
  month: 'long',
  day: 'numeric',
});

  return (
   <header className="header">
    <img
    className="header__logo"
    src={headerLogo}
    alt="Header logo" />
    <p
    className="header__date-and-location">
      {currentDate}, {weatherData.city}
      </p>

<button
className="header__hamburger"
aria-label="Open mobile menu"
onClick={toggleMobileMenu}
>
  <img
  src={isMobileMenuOpened ? closeIcon : hamburgerIcon}
  alt={isMobileMenuOpened ? "Close menu" : "Open menu"}
  />
</button>

<button
    onClick={handleAddClick}
    type="button"
    className="header__add-clothes-btn">
      + Add clothes
      </button>

    <div className="header__user-container">
      <p className="header__username">Terrence Tegegne</p>
      <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
    </div>
  </header>
  );
}

export default Header;