import React, { useState } from 'react';
// NOTE: When navigating to other pages from this component they don't load
// NOTE: Until sessions problem is solved: all submissions will have user_id harcoded
const ProjectForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', technologies: '', github: '', live_link: '', user_id: 20 })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h2>Create New Project</h2>
      <form className='ProjectForm' onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" id="title" onChange={handleChange}></input>
        <br />
        <label>Technologies</label>
        <input type="text" id="technologies" onChange={handleChange}></input>
        <br />
        <label>Description</label>
        <input type="text" id="description" onChange={handleChange}></input>
        <br />
        <label>Github</label>
        <input type="text" id="github" onChange={handleChange}></input>
        <br />
        <label>Live Link</label>
        <input type="text" id="live_link" onChange={handleChange}></input>
        <br />
        <input type="submit" value="Add Project" />
      </form>
    </>
  )
};

export default ProjectForm;

