import React, { useState, useEffect } from "react";

const ProjectsList = ({ projects }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState([])

  useEffect(() => {
    setProjectsToDisplay(projects)
  }, [projects])

  console.log("projects to display", projectsToDisplay)
  return (
    <div className="ProjectsList">
      <h2>Projects</h2>
    </div>
  )
};

export default ProjectsList