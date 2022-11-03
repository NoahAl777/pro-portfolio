import React from "react";
import { useEffect } from "react";
import Profile from "./Profile"
import { Link } from "react-router-dom"

const Me = ({ me, setMe, setSelectedProject }) => {
  console.log(me)

  if (!me) {
    fetch("/me")
      .then(r => r.json())
      .then(data => {
        setMe(data)
      })
  }

  return (
    <>
      <Link to="/projects/new">
        <button>Add Project</button>
      </Link>
      {me.length !== 0 ? <Profile selectedProfile={[me]} setSelectedProject={setSelectedProject} /> : <p>Loading...</p>}
    </>
  )
};

export default Me;