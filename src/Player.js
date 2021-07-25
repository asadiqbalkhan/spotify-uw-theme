import React from "react";
import Body from "./Body";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* Side bar */}
        <Body spotify={spotify} />
        {/* Body */}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Player;
