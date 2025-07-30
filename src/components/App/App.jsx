// React imports
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

// Utility imports
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { register, authorize, checkToken } from "../../utils/auth";

// Style imports
import "./App.css";
import "../../vendor/fonts.css";
// import { defaultClothingItems } from "../../utils/constants"; //temporary
import { getItems, deleteItem, addItem } from "../../utils/api";

function App() {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  const [itemDelete, setItemDelete] = useState();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setIsConfirmModalOpen(false);
    setItemDelete(undefined);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    setIsLoading(true);
    return addItem({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOpenConfirmModal = (card) => {
    setItemDelete(card);
    setIsConfirmModalOpen(true);
  };

  const handleCardDelete = () => {
    deleteItem(itemDelete._id || itemDelete.id)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== itemDelete._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  // Check token on initial load and Auto-login if valid
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.error("Token check failed:", err.message);
          setIsLoggedIn(false);
          setCurrentUser(null);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  // placeholder: auth handlers temporary
  const handleRegister = ({ name, avatar, email, password }) => {
    register({ name, avatar, email, password })
      .then(() => {
        // After registration, automatically log in the user
        return authorize({ email, password });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        return checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeRegisterModal();
      })
      .catch((err) => {
        console.error("Registration error:", err.message);
      });
  };

  const handleLogin = ({ email, password }) => {
    authorize({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        return checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeLoginModal();
      })
      .catch((err) => {
        console.error("Login error:", err.message);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div
          className={`page__content ${
            isProfilePage && isMobile ? "page__content-mobile" : ""
          }`}
        >
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            onRegisterClick={openRegisterModal}
            onLoginClick={openLoginModal}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  onAddClick={handleAddClick}
                  clothingItems={clothingItems}
                  currentUser={currentUser}
                  onSignOut={handleSignOut}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItemModalSubmit={handleAddItemModalSubmit}
          isLoading={isLoading}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
          onDelete={() => handleOpenConfirmModal(selectedCard)}
        />
        <DeleteConfirmationModal
          isOpen={isConfirmModalOpen}
          onClose={() => {
            setIsConfirmModalOpen(false);
            setItemDelete(undefined);
          }}
          onConfirm={handleCardDelete}
        />

        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={closeRegisterModal}
          onRegister={handleRegister}
          onSwitchToLogin={openLoginModal}
        />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          onLogin={handleLogin}
          onSwitchToRegister={openRegisterModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
