import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        className="nav__logo"
      />

      <img
        src="https://occ-0-3997-116.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbU3UHUlkChqMS0UORybrasISolcRmk12xz3v84eycdFXFb0OpRQn-eS1DPXHPfnedUm2GsZylJOXOpNbDjSDMw.png?r=a41"
        alt="profile_picture"
        className="navbar__avatar"
      />
    </div>
  );
}

export default NavBar;
