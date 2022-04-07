import React from "react";
import { useParams } from "react-router-dom";

const Profile = ({ selectedProfile }) => {
  const params = useParams();
  console.log("selected profile", selectedProfile)

  return (
    <div className="Profile">
      <h2>Profile</h2>
    </div>
  )
};

export default Profile;