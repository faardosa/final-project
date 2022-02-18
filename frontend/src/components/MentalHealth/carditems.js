import React from 'react'
import {Link} from 'react-router-dom'

function Carditems (props) {
    return (
        <>
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
        </>
    )
}

export default Carditems