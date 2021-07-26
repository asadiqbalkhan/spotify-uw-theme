import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon, img }) => {
  return (
    <div className="sidebarOption">
      {img && <img src="/images/library-icon.svg" alt="" />}
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon || img ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
