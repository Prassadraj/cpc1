import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex items-center gap-80 ml-16">
      <div className="left">
        <Link to="/">
          <img
            width="150px"
            src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-580x435.png"
            alt=""
          />
        </Link>
      </div>
      <div className="right flex gap-10">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
