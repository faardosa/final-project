import React from "react";
import "./App.css";
import NutritionPage from "./routes/NutritionPage";
import FitnessPage from "./routes/FitnessPage";
import MainPage from "./routes/MainPage";
import MentalHealthPage from "./routes/MentalHealthPage";
import ResourcesPage from "./routes/ResourcesPage";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/";
import Recipe from "./components/Nutrition/Recipes";
import Bodyfitness from './components/Fitness/index.js';
import Arms from './components/Arms/index.js';
import Legs from './components/Legs/index.js';
import Abs from './components/Abs/index.js';
import Back from './components/Back/index.js';
import Glutes from './components/Glutes/index.js';



import { useState } from "react";

function App() {
  const [state] = useState({
    meals: { 
      
      breakfast: { 
      
        id: "breakfast", 
        header: "Breakfast",
        items: [{ name: "Avocado" }, { name: "Oatmeal" }] 
        
        },
        
        lunch: { 
      

          id:"lunch",
          header:  "Lunch",
          items: [{ name: "Chicken" }, { name: "Salmon" }] 
        
        },
        dinner: { 
      
          id:"dinner",
          header:"Dinner",
          items: [{ name: "Avocado" }, { name: "Oatmeal" }, { name: "Oatmeal" }] 
        
        },
      },

    recipes: {

        Avocado: {
          description: "Ingredients: 1 whole ripe avocado, whole wheat slice of bread, 2 eggs, cooked to your way of preference."
        },

        Oatmeal: {
          description: "oatmeal"
        },
        Chicken: {
          description: "chicken"
        },
        Salmon: {
          description: "salmon"
        },
        



    }
  });

  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="fitness" element={<FitnessPage />} />
        <Route path="nutrition" element={<NutritionPage meals={state.meals} />} />
        <Route path="mentalhealth" element={<MentalHealthPage />} />
        <Route path="recipe/:name" element={<Recipe recipes={state.recipes} />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="Bodyfitness" element={<Bodyfitness/>} />
      <Route path="Arms" element={<Arms/>} />
      <Route path="Legs" element={<Legs/>} />
      <Route path="Abs" element={<Abs/>} />
      <Route path="Back" element={<Back/>} />
      <Route path="Glutes" element={<Glutes/>} />


      </Routes>
    </div>
  );
}

export default App;
