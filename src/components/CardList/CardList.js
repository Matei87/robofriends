import React from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
    //console.log(robots);

    if (true) {
        throw new Error('NOOOOOO');
    }
    return (
        robots.map((robot, i) => {
            return < Card key={i} robot={robot} />
        })
    )
}

export default CardList;