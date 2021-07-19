import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = ({ title }) => {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://community.spotify.com/t5/image/serverpage/image-id/27289i6CB37DCE3D36368E?v=v2"
        alt=""
      />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </div>
  );
};

export default Sidebar;
