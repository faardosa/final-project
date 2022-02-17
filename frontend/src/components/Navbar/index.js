import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>Divine Energy</h1>
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