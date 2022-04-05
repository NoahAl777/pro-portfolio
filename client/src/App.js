import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Home from "./Components/Home"
import ProfilesList from './Components/ProfilesList';

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => {
        setProfiles(data)
      })
  }, [])

  return (
    <div className="App">
      <Home />
      <ProfilesList profiles={profiles} />
    </div>
  );
}

export default App;
