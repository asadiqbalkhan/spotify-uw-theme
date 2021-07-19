import React from "react";
import Body from "./Body";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Player = () => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* Side bar */}
        <Body />
        {/* Body */}
      </div>
      {/* Footer */}
      <Footer />s
    </div>
  );
};

export default Player;
