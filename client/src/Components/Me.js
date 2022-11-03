import React from "react";
import Profile from "./Profile"

const Me = ({ me }) => {
  console.log(me)
  return (
    <>
      <Profile selectedProfile={[me]} />
    </>
  )
};

export default Me;