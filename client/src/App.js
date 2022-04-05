import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Home from "./Components/Home"
import ProfilesList from './Components/ProfilesList';

function App() {
  return (
    <div className="App">
      <Home />
      <ProfilesList />
    </div>
  );
}

export default App;
