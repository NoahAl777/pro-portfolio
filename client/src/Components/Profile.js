import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = ({ selectedProfile, setSelectedProfile }) => {
  const params = useParams();
  const { firstname, lastname, email, github, profession, username } = selectedProfile[0];

  console.log("current profile", currentProfile)
  return (
    <div className="Profile">
      <h1>{firstname} {lastname} | {profession}</h1>
      <h2>Contact me:</h2>
      <p>Email: {email}</p>
      <p>Github: {github}</p>
    </div>
  )
};

export default Profile;