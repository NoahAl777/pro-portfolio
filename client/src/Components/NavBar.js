import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="NavBar">
      <Link to="/">
        <button className="HomeButton">Home</button>
      </Link>
      <Link to="/profiles">
        <button className="PortfoliosButton">Portfolios</button>
      </Link>
      <Link to="/projects">
        <button className="ProjectsButton">Projects</button>
      </Link>
      <Link to="/categories">
        <button className="CategoriesButton">Categories</button>
      </Link>
    </div>
  )
};

export default NavBar;