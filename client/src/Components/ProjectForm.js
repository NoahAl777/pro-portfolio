import React, { useState } from 'react';
// NOTE: When navigating to other pages from this component they don't load

const ProjectForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', technologies: '', github: '', live_link: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h2>Create New Project</h2>
      <form className='ProjectForm' onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" id="title"></input>
        <br />
        <label>Technologies</label>
        <input type="text" id="technologies"></input>
        <br />
        <label>Description</label>
        <input type="text" id="description"></input>
        <br />
        <label>Github</label>
        <input type="text" id="github"></input>
        <br />
        <label>Live Link</label>
        <input type="text" id="live_link"></input>
        <br />
        <input type="submit" value="Add Project" />
      </form>
    </>
  )
};

export default ProjectForm;

