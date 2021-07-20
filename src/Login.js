import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
import Video from "./Video/anim.mp4";
const Login = () => {
  return (
    <>
      {/* <video className="background__animation" type="video/mp4">
        {Video}
      </video> */}
      <div className="login">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
          alt=""
        />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
    </>
  );
};

export default Login;
