import React from 'react'
import {Link} from 'react-router-dom'
import Carditems from './carditems'
import './cards.css'
import therapist from '../../images/therapist.jpeg'
import supportchatw from '../../images/supportchatw.jpeg'
import livechat from '../../images/livechat.png'
import emergency from '../../images/emergency.jpeg'
function Cards () {
    return (
        <>
        <div className='cards'>
             <h1> Check out these amazing Resources! </h1>
            <div className="cards_container">
                 <div className="cards_wrapper">
                      <ul className="cards_items">
                    <Carditems
                    src= {therapist}
                    text= 'Book with a Therapist!'
                    label='Therapists'
                     />
                      </ul>
                 </div>
            </div>
    </div>
    
        <div className='cards'>
            <div className="cards_container">
                 <div className="cards_wrapper">
                      <ul className="cards_items">
                    <Carditems
                    src= {supportchatw}
                    text= 'Would you like to be in a women support group? '
                    label='Support Group'
                     />
                      </ul>
                 </div>
            </div>
    </div>

    <div className='cards'>
            <div className="cards_container">
                 <div className="cards_wrapper">
                      <ul className="cards_items">
                    <Carditems
                    src= {livechat}
                    text= 'Would you like to checkout the live chat? '
                    label='Live Chat'
                     />
                      </ul>
                 </div>
            </div>
    </div>
    <div className='cards'>
            <div className="cards_container">
                 <div className="cards_wrapper">
                      <ul className="cards_items">
                    <Carditems
                    src= {emergency}
                    text= 'Would you like to emergency assitance? '
                    label='Emergency Assistance'
                     />
                      </ul>
                 </div>
            </div>
    </div>
    </>
    )
    // return (
    //     <div className='cards'>
    //          <h1> Check out these amazing Resources! </h1>
    //         <div className="cards_container">
    //              <div className="cards_wrapper">
    //                   <ul className="cards_items">
    //                 <Carditems
    //                 src= {therapist}
    //                 text= 'Would you like to converse with a woman live chat? '
    //                 label='Therapists'
    //                  />
    //                   </ul>
    //              </div>
    //         </div>
    // </div>
    // )
    
}
export default Cards