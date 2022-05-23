import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", firstname: "", lastname: "", profession: "", github: "" })

  const handleChange = (event) => {
    console.log(event.target.id, event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" id="username" onChange={handleChange}></input>
        <br />
        <label>Password</label>
        <input type="password" id="password" onChange={handleChange}></input>
        <br />
        <label>Email</label>
        <input type="text" id="email" onChange={handleChange}></input>
        <br />
        <label>First Name</label>
        <input type="text" id="firstname" onChange={handleChange}></input>
        <br />
        <label>Last Name</label>
        <input type="text" id="lastname" onChange={handleChange}></input>
        <br />
        <label>Profession</label>
        <input type="text" id="profession" onChange={handleChange}></input>
        <br />
        <label>GitHub</label>
        <input type="text" id="github" onChange={handleChange}></input>
        <br />
        <input type="submit" value="Sign Up"></input>
      </form>
    </div>
  )
};

export default SignUp;