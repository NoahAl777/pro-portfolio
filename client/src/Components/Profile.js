import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Project from "./Project";
import ProjectsList from "./ProjectsList";

const Profile = ({ selectedProfile, setSelectedProfile, setSelectedProject }) => {
  const params = useParams();
  console.log("profile", selectedProfile)
  const [currentProfile, setCurrentProfile] = useState(selectedProfile[0])

  useEffect(() => {
    if (currentProfile == undefined) {
      fetch(`/users/${params.profileId}`)
        .then(r => r.json())
        .then((data) => setCurrentProfile(data))
    }
  }, [])

  // console.log(currentProfile)
  const handleSelectProjectClick = (clickedProject) => {
    setSelectedProject(clickedProject)
  }
  // debugger
  if (currentProfile != undefined && currentProfile.error != 'Not authorized') {

    let userProjectCards = currentProfile.projects.map(project => {
      // console.log("project", project)
      return (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`} onClick={() => handleSelectProjectClick(project)}>
            <Project selectedProject={project} />
          </Link>
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