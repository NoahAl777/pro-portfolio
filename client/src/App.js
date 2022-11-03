import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from './Components/SignUp';
import Me from "./Components/Me";
import ProfilesList from './Components/ProfilesList';
import ProjectsList from './Components/ProjectsList';
import CategoriesList from './Components/CategoriesList';
import Profile from './Components/Profile';
import Project from './Components/Project';
import ProjectForm from './Components/ProjectForm';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [me, setMe] = useState([])
  // console.log("app", me)
  useEffect(() => {
    fetch("/me")
      .then(r => r.json())
      .then(data => {
        setMe(data)
      })
  }, [projects])

  useEffect(() => {
    fetch("/users")
      .then(r => r.json())
      .then(data => {
        setProfiles(data)
      })
  }, []);

  useEffect(() => {
    fetch("/projects")
      .then(r => r.json())
      .then(data => {
        setProjects(data)
      })
  }, []);

  useEffect(() => {
    fetch("/categories")
      .then(r => r.json())
      .then(data => {
        setCategories(data)
      })
  }, []);

  return (
    <div className="App">
      <NavBar setMe={setMe} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me me={me} setMe={setMe} setSelectedProject={setSelectedProject} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setMe={setMe} />} />
        <Route path="/profiles" element={
          <ProfilesList
            profiles={profiles}
            setSelectedProfile={setSelectedProfile} />}
        />
        <Route path="/profiles/:profileId" element={
          <Profile
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
            setSelectedProject={setSelectedProject} />}
        />
        <Route path="/projects" element={
          <ProjectsList
            projects={projects}
            setSelectedProject={setSelectedProject} />}
        />
        <Route path="/projects/:projectId" element={<Project selectedProject={selectedProject} />} />
        <Route path="/projects/new" element={<ProjectForm me={me} projects={projects} setProjects={setProjects} />} />
        <Route path="/categories" element={<CategoriesList categories={categories} />} />
      </Routes>
    </div>
  );

};

export default App;
