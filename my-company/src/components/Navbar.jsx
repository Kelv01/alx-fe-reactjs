import { Link } from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "none" }}>
      <ul
        style={{ top: '0',
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          color: "white",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
