import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/Links";

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top border-bottom bg-success-subtle">
        <div className="container-fluid">
          <Link className="navbar-brand" to={appLinks?.Home}>
            <i className="bi bi-flower1 text-success"></i>Know My Carbon
            Footprint
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
