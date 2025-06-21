import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar() {
return (
<div className="sidebar-wrapper">
  <div className="sidebar">
  <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
  <div className="sidebar__user">
  <p className="sidebar__username">Terrence Tegegne</p>
  <button className="sidebar__change">Change profile data</button>
  <button className="sidebar__logout">Log out</button>
</div>
</div>
</div>
);
}

export default SideBar;