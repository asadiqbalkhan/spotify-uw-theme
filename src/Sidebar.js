import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          className="sidebar__logoImage"
          src="/images/spotify.svg"
          alt="this is logo"
        />
        <p>
          Spotify for <strong>UltraWorking</strong>
        </p>
      </div>

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption title="Your Library" img />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <>
          <SidebarOption title={playlist.name} />
        </>
      ))}
    </div>
  );
};

export default Sidebar;
