import React from 'react';
import './style.css';

const Card = props => {
    return (
        <div className="card-container">
            <img style={{width:300,margin:'0 auto'}} alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h1 key={props.monster.id}>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    );
}

export default Card;