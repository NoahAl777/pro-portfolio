import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ setSelectedProfile }) => {

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
      .then(setSelectedProfile([]))
      .then(console.log("Logout"))
      .catch((e) => console.log(e))
  }

  return (
    <div className="NavBar">
      <Link to="/">
        <button className="HomeButton">Home</button>
      </Link>
      <Link to="/me">
        <button className="Me">Me</button>
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
      <Link to="/login">
        <button className="LoginButton">Login</button>
      </Link>
      <button className="LogoutButton" onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default NavBar;