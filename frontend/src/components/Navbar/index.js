import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Divine Energy</h1>
      {/* <h3> For Woman By Woman</h3> */}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
        
      >
        <Link to="/">Main</Link> |{" "} 
        <Link to="/nutrition">Nutrition</Link> |{" "}
        <Link to="/fitness">Fitness</Link> |{" "} 
        <Link to="/mentalhealth">Mental Health</Link>

      </nav>
    </div>
  );
}