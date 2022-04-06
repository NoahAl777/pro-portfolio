import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import ProfilesList from './Components/ProfilesList';
import ProjectsList from './Components/ProjectsList';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => {
        setProfiles(data)
      })
  }, []);

  useEffect(() => {
    fetch("/api/projects")
      .then(r => r.json())
      .then(data => {
        setProjects(data)
      })
  }, []);

  console.log("projects", projects)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<ProfilesList profiles={profiles} />} />
        <Route path="/projects" element={<ProjectsList />} />
      </Routes>
    </div>
  );
};

export default App;
