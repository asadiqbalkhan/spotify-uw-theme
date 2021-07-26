import { Favorite, PlayCircleFilled } from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <>
      <div className="body">
        <Header spotify={spotify} />

        {/* Banner */}
        <div className="body__info">
          <img src={discover_weekly?.images[0].url} alt="discover_weekly" />
          {/* console.log({discover_weekly?.images[0].url}) */}
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilled className="body__shuffle" />
            <Favorite fontSize="large" />
            <MoreHorizIcon />
          </div>
          {/* List of songs */}
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
