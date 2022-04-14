import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home"
import ProfilesList from './Components/ProfilesList';
import ProjectsList from './Components/ProjectsList';
import CategoriesList from './Components/CategoriesList';
import Profile from './Components/Profile';
import Project from './Components/Project';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState([]);

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

  useEffect(() => {
    fetch("/api/categories")
      .then(r => r.json())
      .then(data => {
        setCategories(data)
      })
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={
          <ProfilesList
            profiles={profiles}
            setSelectedProfile={setSelectedProfile} />}
        />
        <Route path="/profiles/:profileId" element={
          <Profile
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile} />}
        />
        <Route path="/projects" element={<ProjectsList projects={projects} />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/categories" element={<CategoriesList categories={categories} />} />
      </Routes>
    </div>
  );
};

export default App;
