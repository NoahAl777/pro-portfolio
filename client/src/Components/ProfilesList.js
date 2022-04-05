import React, { useState, useEffect } from "react";

const ProfilesList = () => {
  const [profiles, setProfiles] = useState();
  const [profilesToDisplay, setProfilesToDisplay] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => setProfiles(data))
  }, [])

  useEffect(() => {
    console.log("profiles:", profiles)
  }, [profiles])

  console.log("profiles: ", profiles)
  return (
    <div className="ProfilesList">

    </div>
  )
};

export default ProfilesList;