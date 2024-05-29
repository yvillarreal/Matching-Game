import React from 'react';

const Scoreboard = ({ score, accumulatedScore }) => {
    return (
        <div className="scoreboard">
            <div>Puntuación: {score}</div>
            <div>Puntuación Acumulada: {accumulatedScore}</div>
        </div>
    );
};

export default Scoreboard;
