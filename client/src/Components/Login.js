import React from "react";

const Login = () => {

  return (
    <div className="Login">
      <form>
        <label>Username</label>
        <input type="text"></input>
        <br />
        <label>Password</label>
        <input type="text"></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
};

export default Login;