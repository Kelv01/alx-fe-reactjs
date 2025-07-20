import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "3rem", color: "crimson" }}>404</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
