import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProfilesList = ({ profiles, selectedProfile, setSelectedProfile }) => {
  const [profilesToDisplay, setProfilesToDisplay] = useState([]);

  useEffect(() => {
    setProfilesToDisplay(profiles)
  }, [profiles])

  console.log("profiles to display: ", profilesToDisplay)

  const listOfProfiles = profilesToDisplay.map(profile => {
    return (
      <Link to={`/profiles/${profile.id}`}>
        <p key={profile.id}>
          {`${profile.firstname} ${profile.lastname} | ${profile.profession} | ${profile.github}`}
        </p>
      </Link>
    )
  })

  return (
    <div className="ProfilesList">
      <h2>Users</h2>
      {listOfProfiles}
    </div>
  )
};

export default ProfilesList;