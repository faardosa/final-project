import React from 'react';
import './App.css';
import NutritionPage from './routes/NutritionPage';
import FitnessPage from './routes/FitnessPage';
import MainPage from './routes/MainPage';
import MentalHealthPage from './routes/MentalHealthPage';

import {
    Routes,
    Route
  } from "react-router-dom";
  import Nav from "./components/Navbar/"


function App() {
  return (
    <div className="wrapper">
      <Nav/>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="fitness" element={<FitnessPage />} />
      <Route path="nutrition" element={<NutritionPage />} />
      <Route path="mentalhealth" element={<MentalHealthPage />} />

    </Routes>
    </div>
  );
}



export default App;

