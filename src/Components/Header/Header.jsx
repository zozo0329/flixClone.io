import React from "react";
import "./Header.css";
import netflixLogo from "./NETFLIXLOGO.png";
import HeaderFeature from "./HeaderFeature/HeaderFeature";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="logo">
          <img src={netflixLogo} alt="netflix_logo" />
        </div>
        <div className="btns">
          <div className="language">
            <button>Language</button>
          </div>
          <div className="sign_in">
            <button>Sign In</button>
          </div>
        </div>
      </div>
      <div className="NAVBAR">
        <HeaderFeature />
      </div>
    </>
  );
};

export default Header;
