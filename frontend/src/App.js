import React from 'react';
import './App.css';
import NutritionPage from './routes/NutritionPage';
import FitnessPage from './routes/FitnessPage';
import MainPage from './routes/MainPage';
import {
    Routes,
    Route
  } from "react-router-dom";
  import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="fitness" element={<FitnessPage />} />
      <Route path="nutrition" element={<NutritionPage />} />
    </Routes>
    </div>
  );
}



export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//       <main>
//           <Switch>
//               <Route path="/" component={Home} exact />
//               <Route path="/about" component={About} />
//               <Route path="/shop" component={Shop} />
//           </Switch>
//       </main>
//   )
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"

//           href="https://www.womenshealthmag.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Divine Energy: For Woman By Woman
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;


