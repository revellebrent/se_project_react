import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar({ currentUser, onSignOut }) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <img className="sidebar__avatar"
        src={currentUser?.avatar || avatar}
        alt={currentUser?.name || "User avatar"} />
        <div className="sidebar__user">
          <p className="sidebar__username">{currentUser?.name || "User Name"}</p>
          <button className="sidebar__change">Change profile data</button>
          <button className="sidebar__logout" onClick={onSignOut}>
            Log out
            </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
