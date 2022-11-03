import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// NOTE: When navigating to other pages from this component they don't load
// NOTE: Until sessions problem is solved: all submissions will have user_id harcoded
// NOTE: Will need to add error messages to form
const ProjectForm = ({ me, projects, setProjects }) => {
  const [formData, setFormData] = useState({ title: '', description: '', technologies: '', github: '', live_link: '', user_id: me.id })
  const navigate = useNavigate()

  useEffect(() => { if (me.error === "Not authorized") { navigate("/login") } })
  console.log(me)
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/users/${me.id}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => setProjects([...projects, data]))
  }

  if (me.error === "Not authorized" || me.length === 0) {
    return <p>Loading...</p>
  } else {
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
  }
};

export default ProjectForm;

