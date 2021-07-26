import React, { useState, useEffect } from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
import Video from "./Video/anim.mp4";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {loading && (
        <video
          className="background__animation"
          autoPlay={true}
          muted
          playsInline={true}
          controls={false}
        >
          <source src={Video} type="video/mp4" />
        </video>
      )}
      <div className="login">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
          alt=""
          className={`${!loading ? "login__imageTransition" : "login__image"}`}
        />
        <a
          href={loginUrl}
          className={`${
            !loading ? "login__buttonTransition" : "login__button"
          }`}
        >
          LOGIN WITH SPOTIFY
        </a>
      </div>
    </>
  );
};

export default Login;
