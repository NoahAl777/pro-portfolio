import React, { useState, useEffect } from "react";

const ProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  const [profilesToDisplay, setProfilesToDisplay] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => {
        setProfiles(data)
      })
  }, [])

  useEffect(() => {
    setProfilesToDisplay(profiles)
  }, [profiles])

  console.log("profiles to display: ", profilesToDisplay)

  const listOfProfiles = profilesToDisplay.map(profile => {
    return (
      <>
        <p key={profile.id}>
          {`${profile.firstname} ${profile.lastname} | ${profile.profession} | ${profile.github}`}
        </p>
      </>
    )
  })

  return (
    <div className="ProfilesList">
      {listOfProfiles}
    </div>
  )
};

export default ProfilesList;