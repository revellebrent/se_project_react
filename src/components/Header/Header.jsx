import { useState, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import hamburgerIcon from "../../assets/hamburger-icon.svg";
import closeIcon from "../../assets/close-icon.png";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header({ handleAddClick, weatherData, isLoggedIn, currentUser, onRegisterClick, onLoginClick }) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className={`header ${isProfilePage ? "header_profile" : ""}`}>
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="Header logo" />
        </Link>
        <p className={`header__date-and-location ${isProfilePage ? "header__date-and-location_profile" : ""}`}>
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

        {!(isProfilePage && isMobile) && <ToggleSwitch />}

        {/* show sign up and log in before login */}
        {!isLoggedIn ? (
          <div className="header__auth-buttons">
            <button
            className="header__auth-button"
            onClick={onRegisterClick}
            type="button"
            >
              Sign up
            </button>
            <button
            className="header__auth-button"
            onClick={onLoginClick}
            type="button"
            >
              Log in
            </button>
          </div>
        ) : (
        <>
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>

        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">
              {currentUser?.name || "User"}
              </p>
            {currentUser?.avatar ? (
            <img
              className="header__avatar"
              src={currentUser.avatar}
              alt={currentUser.name}
            />
            ) : (
              <div className="header__avatar-placeholder">
                {currentUser?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
        </Link>
        </>
        )}
      </header>

      <MobileDrawer
        isOpen={isMobileMenuOpened}
        onClose={toggleMobileMenu}
        handleAddClick={handleAddClick}
      />
    </>
  );
}

export default Header;
