import { Link } from "react-router-dom";
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


// <Container>
// <Navbar.Brand href="#home">Navbar</Navbar.Brand>
// <Nav className="me-auto">
//   <Nav.Link href="#home">Home</Nav.Link>
//   <Nav.Link href="#features">Features</Nav.Link>
//   <Nav.Link href="#pricing">Pricing</Nav.Link>
// </Nav>
export default function Nav() {
  return (
    <div>
    <Navbar className="navbar">
      <Container>
      <img className="logo" src="/images/logo.jpg" alt=" My Logo" />
      <div className="title">Divine Energy</div>
        
        <Link className="tabs" to="/">Main</Link> 
        <Link className="tabs"  to="/nutrition">Nutrition</Link> 
        <Link className="tabs"  to="/fitness">Fitness</Link> 
        <Link className="tabs" to="/mentalhealth">Mental Health</Link> 
        <Link className="tabs" to="/resources">Resources</Link> 
</Container>
</Navbar>


      {/* <img className="logo" src="/images/logo.jpg" /> */}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
        
        
      >

      </nav>
      
    </div>
  );
}


