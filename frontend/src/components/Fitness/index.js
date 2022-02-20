import React from 'react';
import './fitness.css';
import CardItem from '../Carditem';

function Bodyfitness() {
  return (
    <div className='cards'>
      <h1>WHAT ARE WE WORKING ON TODAY?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Workout those Biceps, Shoulders and Triceps with our Effective routine'
              label='Arms'
              path='/Arms'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Get ready to tone those legs with our quick legs routine that target every muslce in your legs'
              label='Legs'
              path='/Legs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='You might feel a little sore after with our famous ab workout'
              label='Abs'
              path='/Abs'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience a great workout with our back routine'
              label='Back'
              path='/Back'
            />
            <CardItem
              src='images/img-8.jpg'
              text='lift and effectively build your glutes up'
              label='Glutes'
              path='/Glutes'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bodyfitness;