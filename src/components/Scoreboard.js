import React, { useEffect } from 'react';

const Scoreboard = ({ score, time, setTime }) => {
    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [time, setTime]);

    return (
        <div className="scoreboard">
            <div>Puntuación: {score}</div>
            <div>Tiempo: {time}s</div>
        </div>
    );
};

export default Scoreboard;
