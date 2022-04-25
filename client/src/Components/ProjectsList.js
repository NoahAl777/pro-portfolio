import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectsList = ({ projects, setSelectedProject }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState([])

  useEffect(() => {
    setProjectsToDisplay(projects)
  }, [projects])

  // console.log("projects to display", projectsToDisplay)

  const handleSelectProjectClick = (clickedProject) => {
    setSelectedProject(clickedProject)
  }

  const listOfProjects = projectsToDisplay.map(project => {
    return (
      <p key={project.id}>
        <Link to={`/projects/${project.id}`} onClick={() => handleSelectProjectClick(project)}>
          {`${project.title} | ${project.description} | ${project.technologies} | ${project.github}`}
        </Link>
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