import React, { useState, useEffect } from "react";

const ProfilesList = () => {
  const [profiles, setProfiles] = useState();
  const [profilesToDisplay, setProfilesToDisplay] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => {
        setProfiles(data)
      })
  }, [])

  const listOfProfiles = profiles.map(profile => {
    return (
      <>
        <p key={profile.id}>
          {`${profile.firstName} ${profile.lastName} | ${profile.profession} | ${profile.github}`}
        </p>
      </>
    )
  })

  console.log("profilesToDisplay: ", profilesToDisplay)
  return (
    <div className="ProfilesList">
      {listOfProfiles != null ? listOfProfiles : null}
    </div>
  )
};

export default ProfilesList;