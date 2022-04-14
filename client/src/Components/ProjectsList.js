import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectsList = ({ projects }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState([])

  useEffect(() => {
    setProjectsToDisplay(projects)
  }, [projects])

  console.log("projects to display", projectsToDisplay)

  const listOfProjects = projectsToDisplay.map(project => {
    return (
      <p key={project.id}>
        {`${project.title} | ${project.description} | ${project.technologies} | ${project.github}`}
      </p>
    )
  })

  return (
    <div className="ProjectsList">
      <h2>Projects</h2>
      {listOfProjects}
    </div>
  )
};

export default ProjectsList