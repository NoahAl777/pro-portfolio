import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })

  const handlChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(console.log)
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" id="username" onChange={handlChange}></input>
        <br />
        <label>Password</label>
        <input type="password" id="password" onChange={handlChange}></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
};

export default Login;