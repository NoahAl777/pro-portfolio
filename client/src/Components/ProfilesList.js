import React, { useState, useEffect } from "react";

const ProfilesList = () => {
  const [profiles, setProfiles] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => setProfiles(data))
  }, [])

  console.log("profiles: ", profiles)
  return (
    <div className="ProfilesList">

    </div>
  )
};

export default ProfilesList;