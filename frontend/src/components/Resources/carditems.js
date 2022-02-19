import React from 'react'
import {Link} from 'react-router-dom'
import "./cards.css";
function Carditems (props) {
    return (
    
        <div className="cardsBox">
        <li className='cards_item'></li>
            <Link className='cards_item_link' to= '/'>
                <figure className='cards_item_pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="Local women therapist"  
                    className="cards_item_img"></img>
                </figure>
        <div className="cards_item_info"> 
        <h5 className="cards_item_text"> {props.text}</h5>
        </div>
        </Link>
        </div>
    )
}

export default Carditems