import React from "react";
import Profile from "./Profile"
import { Link } from "react-router-dom"

const Me = ({ me, setSelectedProject }) => {
  console.log(me)
  return (
    <>
      <Link to="/projects/new">
        <button>Add Project</button>
      </Link>
      <Profile selectedProfile={[me]} setSelectedProject={setSelectedProject} />
    </>
  )
};

export default Me;