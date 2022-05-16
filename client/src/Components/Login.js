import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })

  const handlChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="Login">
      <form>
        <label>Username</label>
        <input type="text" onChange={handlChange}></input>
        <br />
        <label>Password</label>
        <input type="text" onChange={handlChange}></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
};

export default Login;