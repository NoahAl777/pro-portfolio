import React from "react";

const SignUp = () => {

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" id="username" onChange={handlChange}></input>
        <br />
        <label>Password</label>
        <input type="password" id="password" onChange={handleChange}></input>
        <br />
        <label>Email</label>
        <input type="text" id="email" onChange={handlChange}></input>
        <br />
        <label>First Name</label>
        <input type="text" id="firstname" onChange={handlChange}></input>
        <br />
        <label>Last Name</label>
        <input type="text" id="lastname" onChange={handlChange}></input>
        <br />
        <label>Profession</label>
        <input type="text" id="profession" onChange={handlChange}></input>
        <br />
        <label>GitHub</label>
        <input type="text" id="github" onChange={handlChange}></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
};

export default SignUp;