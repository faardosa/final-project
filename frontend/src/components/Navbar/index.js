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
              <Link to='/mentalhealth' className='nav-links' onClick={closeMobileMenu}>
                Mental Health
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
            <li className='nav-item'>
              <Link to='/resources' className='nav-links' onClick={closeMobileMenu}>
                Resources
              </Link>
            </li>
            <li>
            <li className='nav-item'>
              <Link to='/journals' className='nav-links' onClick={closeMobileMenu}>
                My Journals
              </Link>
            </li>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>My Progress</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
