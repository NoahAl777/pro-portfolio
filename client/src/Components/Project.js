import React, { useState } from "react";

const Project = (selectedProject) => {
  const [currentProject, setCurrentProject] = useState(selectedProject)

  console.log("current project", currentProject.selectedProject)
  // debugger

  return (
    <div className="Project">
      <h2>Project</h2>
    </div>
  )
};

export default Project;