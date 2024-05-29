import React from 'react';

const Card = ({ card, flipped, handleClick }) => {
    return (
        <div className={`card ${flipped ? 'flipped' : ''} hvr-float-shadow`} onClick={() => handleClick(card.id)}>
            <div className="card-inner">
                <div className="card-front">
                    <img src="backside.jpg" alt="back" />
                </div>
                <div className="card-back">
                    <img src={card.image} alt="front" />
                </div>
            </div>
        </div>
    );
};

export default Card;
