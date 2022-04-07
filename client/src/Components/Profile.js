import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = ({ selectedProfile, setSelectedProfile }) => {
  const params = useParams();
  const [currentProfile, setCurrentProfile] = useState(selectedProfile[0])
  // const { firstname, lastname, email, github, profession, username } = selectedProfile[0];
  console.log(currentProfile)
  return (
    <div className="Profile">
      {/* <h1>{firstname} {lastname} | {profession}</h1>
      <h2>Contact me:</h2>
      <p>Email: {email}</p>
      <p>Github: {github}</p> */}
    </div>
  )
};

export default Profile;