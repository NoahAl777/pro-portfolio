import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setMe }) => {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleChange = (event) => {
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
      .then(data => {
        if (!data.error) {
          setMe(data)
          setError([])
          navigate("/me")
        } else {
          setError(data.error)
        }
      })
  }

  return (
    <div className="Login">
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" id="username" onChange={handleChange}></input>
        <br />
        <label>Password</label>
        <input type="password" id="password" onChange={handleChange}></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
};

export default Login;