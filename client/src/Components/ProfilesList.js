import React, { useState, useEffect } from "react";

const ProfilesList = () => {
  const [profiles, setProfiles] = useState();
  const [profilesToDisplay, setProfilesToDisplay] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => {
        setProfiles(data)
        setProfilesToDisplay(data)
      })
  }, [])

  console.log("profilesToDisplay: ", profilesToDisplay)
  return (
    <div className="ProfilesList">

    </div>
  )
};

export default ProfilesList;