import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Footer = () => {
  return (
    <>
      {/* <div className="footer__glow">Glow it here</div> */}
      <div className="footer">
        <div className="footer__left">
          <img
            className="footer__albumLogo"
            src="https://i1.wp.com/lyricsfa.com/wp-content/uploads/2019/04/Disturbed-Stupify-Lyrics-2112819723-1554746652687.jpg?fit=960%2C946&ssl=1"
            alt="album cover"
          />
          <div className="footer__songInfo">
            <h4>Disturbed</h4>
            <p>Stupify</p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Footer;
