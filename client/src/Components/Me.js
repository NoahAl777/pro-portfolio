import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile"
import { Link } from "react-router-dom"

const Me = ({ me, setMe, setSelectedProject }) => {
  console.log(me)
  const navigate = useNavigate()

  useEffect(() => {
    if (!me && !me.error) {
      fetch("/me")
        .then(r => r.json())
        .then(data => {
          setMe(data)
        })
    } else {
      navigate("/login")
    }
  }, [])


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