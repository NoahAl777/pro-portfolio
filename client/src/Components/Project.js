import React, { useState } from "react";

const Project = (selectedProject) => {
  const [currentProject, setCurrentProject] = useState(selectedProject)

  console.log("current project", currentProject.selectedProject)
  // debugger
  if (currentProject.selectedProject.length != 0) {
    const { title, description, technologies, github } = currentProject.selectedProject
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