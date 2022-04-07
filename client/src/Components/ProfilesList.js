import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProfilesList = ({ profiles, setSelectedProfile }) => {
  const [profilesToDisplay, setProfilesToDisplay] = useState([]);

  useEffect(() => {
    setProfilesToDisplay(profiles)
  }, [profiles])

  const handleSelectProfileClick = (clickedProfileId) => {
    const clickedProfile = profiles.filter((profile) => profile.id === clickedProfileId)
    setSelectedProfile(clickedProfile)
  }

  const listOfProfiles = profilesToDisplay.map(profile => {
    return (
      <p key={profile.id}>
        <Link to={`/profiles/${profile.id}`} onClick={() => handleSelectProfileClick(profile.id)}>
          {`${profile.firstname} ${profile.lastname} | ${profile.profession} | ${profile.github}`}
        </Link>
      </p>
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