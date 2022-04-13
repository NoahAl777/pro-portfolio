import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = ({ selectedProfile, setSelectedProfile }) => {
  const params = useParams();
  const [currentProfile, setCurrentProfile] = useState(selectedProfile[0])

  useEffect(() => {
    if (currentProfile == undefined) {
      fetch(`/api/users/${params.profileId}`)
        .then(r => r.json())
        .then((data) => setCurrentProfile(data))
    }
  }, [])

  if (currentProfile != undefined) {
    const { firstname, lastname, email, github, profession, username } = currentProfile;
    return (
      <div className="Profile">
        <h1>{firstname} {lastname} | {profession}</h1>
        <h2>Contact me:</h2>
        <p>Email: {email}</p>
        <p>Github: {github}</p>
      </div>
    )
  } else {
    return <h2>Loading profile...</h2>
  }

  // console.log("current profile", currentProfile)
  // console.log("displayed", displayedProfile)
};

export default Profile;