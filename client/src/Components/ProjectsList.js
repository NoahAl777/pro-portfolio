import React, { useState, useEffect } from "react";

const ProjectsList = ({ projects }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState([])

  console.log("projects", projects)
  return (
    <div className="ProjectsList">
      <h2>Projects</h2>
    </div>
  )
};

export default ProjectsList