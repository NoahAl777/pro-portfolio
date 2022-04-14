import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="NavBar">
      <button className="HomeButton">Home</button>
      <button className="PortfoliosButton">Portfolios</button>
      <button className="ProjectsButton">Projects</button>
      <button className="CategoriesButton">Categories</button>
    </div>
  )
};

export default NavBar;