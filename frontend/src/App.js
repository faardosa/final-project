import React from "react";
import "./App.css";
import NutritionPage from "./routes/NutritionPage";
import FitnessPage from "./routes/FitnessPage";
import MainPage from "./routes/MainPage";
import MentalHealthPage from "./routes/MentalHealthPage";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/";
import Recipe from "./components/Nutrition/Recipes";
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
          items: [{ name: "Chicken" }, { name: "Oatmeal" }] 
        
        },
        dinner: { 
      
          id:"dinner",
          header:"Dinner",
          items: [{ name: "Avocado" }, { name: "Oatmeal" }, { name: "Oatmeal" }] 
        
        },
      },

    recipes: {

        Avocado: {
          description: "description"
        },

        Oatmeal: {
          description: "oatmeal"
        }




    }
  });

  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="fitness" element={<FitnessPage />} />
        <Route path="nutrition" element={<NutritionPage meals={state.meals} />} />
        <Route path="mental" element={<MentalHealthPage />} />
        <Route path="recipe/:name" element={<Recipe recipes={state.recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
