import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { DataLayer, useDataLayerValue } from "./DataLayer";
// <Todo></Todo>
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  const [{ user }, dispatch] = useDataLayerValue();
  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // dispatch({
      //   type: "SET_TOKEN",
      //   token: _token,
      // });
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcNaqSlEt3YH7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
    console.log(" I HAVE A TOKEN 🔥  ", token);
  }, []);

  console.log("🙇", user);
  console.log("👾", token);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
