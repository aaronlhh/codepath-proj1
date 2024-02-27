import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img className='truck' src= {props.src} />
            <h3>{props.truckName}</h3>
            <h4>{props.location}</h4>
            <a href={props.menuLink} className='menuButton'>
                <button>View Menu</button>
            </a>
        </div>
    )
};

export default Card;