import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Project from "./Project";

const Profile = ({ selectedProfile, setSelectedProfile }) => {
  const params = useParams();
  const [currentProfile, setCurrentProfile] = useState(selectedProfile[0])

  useEffect(() => {
    if (currentProfile == undefined) {
      fetch(`/api/users/${params.profileId}`)
        .then(r => r.json())
        .then((data) => setCurrentProfile(data))
    }
  }, [])

  console.log(currentProfile)

  if (currentProfile != undefined) {

    let userProjectCards = currentProfile.projects.map(project => {
      return (
        <div key={project.id}>
          <Project selectedProject={project} />
        </div>
      )
    })

    const { firstname, lastname, email, github, profession, username } = currentProfile;
    return (
      <div className="Profile">
        <h1>{firstname} {lastname} | {profession}</h1>
        <h2>Contact me:</h2>
        <p>Email: {email}</p>
        <p>Github: {github}</p>
        <h2>Projects</h2>
        {userProjectCards != undefined ? userProjectCards : null}
      </div>
    )
  } else {
    return <h2>Loading profile...</h2>
  }
};

export default Profile;