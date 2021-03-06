import React from 'react';
import './Card.css';


const Card = ({ robot }) => {
    //console.log(robot);

    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src={`https://robohash.org/${robot.id}?200x200`} alt="ima" />
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    )
}

export default Card;