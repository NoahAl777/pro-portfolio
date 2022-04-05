import React, { useState, useEffect } from "react";

const ProfilesList = () => {
  const [profiles, setProfiles] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(console.log)
  })

  return (
    <div className="ProfilesList">

    </div>
  )
};

export default ProfilesList;