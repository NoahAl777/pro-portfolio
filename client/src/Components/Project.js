import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Project = ({ selectedProject }) => {
  const params = useParams()
  const [currentProject, setCurrentProject] = useState([selectedProject])

  // console.log("selected", selectedProject)
  console.log("current", currentProject)
  // debugger

  useEffect(() => {
    if (Object.keys(currentProject[0]).length == 0) {
      fetch(`/api/projects/${params.projectId}`)
        .then(r => r.json())
        .then(data => setCurrentProject([data]))
        .then(console.log("fetched"))
    } else {
      setCurrentProject([selectedProject])
    }
  }, [])

  // debugger
  if (currentProject[0].length != 0) {
    const { title, description, technologies, github } = currentProject[0]
    return (
      <div className="Project">
        <h2>{`${title} - ${technologies}`}</h2>
        <p>{`Description: ${description}`}</p>
        <p>{`Github: ${github}`}</p>
      </div>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
};

export default Project;