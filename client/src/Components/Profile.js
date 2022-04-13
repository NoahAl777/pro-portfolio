import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = ({ selectedProfile, setSelectedProfile }) => {
  const params = useParams();
  const [currentProfile, setCurrentProfile] = useState(selectedProfile[0])
  // const { firstname, lastname, email, github, profession, username } = currentProfile;

  useEffect(() => {
    if (currentProfile == undefined) {
      fetch(`/api/users/${params.profileId}`)
        .then(r => r.json())
        .then((data) => setCurrentProfile(data))
    }
  }, [])

  const displayedProfile = currentProfile != undefined ? currentProfile : null
  console.log("current profile", currentProfile)
  console.log("displayed", displayedProfile)
  return (
    <div className="Profile">
      <h1>{displayedProfile.firstname} {displayedProfile.lastname} | {displayedProfile.profession}</h1>
      <h2>Contact me:</h2>
      <p>Email: {displayedProfile.email}</p>
      <p>Github: {displayedProfile.github}</p>
    </div>
  )
};

export default Profile;