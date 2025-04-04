import React from "react";
import "./HeaderFeature.css";
const HeaderFeature = () => {
  return (
    <>
      <div className="Navbar_HERO">
        <div className="Navbar">
          <div className="Popular-now">
            <button>Popular Now</button>
          </div>
          <div className="Plans">
            <button>Plans</button>
          </div>
          <div className="Reasons-to-join">
            <button>Reasons to Join</button>
          </div>
          <div className="FAQ">
            <button>FAQ</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderFeature;
