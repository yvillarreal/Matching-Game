import React, { useEffect } from 'react';

const Scoreboard = ({ score, accumulatedScore, time, setTime, onTimeOut }) => {
    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            onTimeOut();
        }
    }, [time, setTime, onTimeOut]);

    return (
        <div className="scoreboard">
            <div>Puntuación: {score}</div>
            <div>Puntuación Acumulada: {accumulatedScore}</div>
            <div>Tiempo: {time}s</div>
        </div>
    );
};

export default Scoreboard;
