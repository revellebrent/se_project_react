import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar({ currentUser, onSignOut, onEditProfileClick }) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar__top">
          <img
            className="sidebar__avatar"
            src={currentUser?.avatar || avatar}
            alt={currentUser?.name || "User avatar"}
          />
           <p className="sidebar__username">
            {currentUser?.name || "User Name"}
          </p>
        </div>

        <div className="sidebar__button-group">
          <button className="sidebar__change" onClick={onEditProfileClick}>
            Change profile data
          </button>
          <button className="sidebar__logout" onClick={onSignOut}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
