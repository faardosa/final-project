import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';



import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button.js';
// import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
<<<<<<< HEAD
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
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Divine Energy
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/nutrition'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nutrition
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/fitness'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Fitness
              </Link>
            </li>

            <li>
              <Link
                to='/ProgressPage'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                My Progress
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>My Progress</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;