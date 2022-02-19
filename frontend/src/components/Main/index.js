import React from 'react';
// import '../App.css';
import { Button } from '../Button/Button.js';
import './main.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>THE BODY ACHIEVES</h1>
      <p>WHAT THE MIND BELIEVES</p>
     
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

      
      </div>
    </div>
  );
}

export default HeroSection;