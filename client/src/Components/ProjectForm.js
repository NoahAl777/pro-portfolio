import React from 'react';

const ProjectForm = () => {
  // NOTE: When navigating to other pages from this component they don't load
  return (
    <>
      <h2>Create New Project</h2>
      <form className='ProjectForm'>
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

