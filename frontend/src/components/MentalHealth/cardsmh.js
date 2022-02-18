import React from 'react'
import {Link} from 'react-router-dom'
import Carditems from './carditems'
import './cards.css'
import therapist from '../../images/therapist.jpeg'


function Cards () {
    return (
        <div className='cards'>
            <h1> Check out these amazing Women Therapist! </h1>
            <div className="cards_container">
                 <div className="cards_wrapper">
                      <ul className="cards_items">
                    <Carditems
                    src= {therapist}
                    text= 'Would you like to converse with a woman Therapist '
                    label='Therapists'
                     />
                      </ul>
                 </div>
            </div>
    </div>
    )
}
export default Cards