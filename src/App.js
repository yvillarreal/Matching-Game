import React, { useState } from 'react';
import Board from './components/Board';
import Modal from './components/Modal';
import Scoreboard from './components/Scoreboard';

const App = () => {
    const [numImages, setNumImages] = useState(4);
    const [showModal, setShowModal] = useState(false);
    const [gameKey, setGameKey] = useState(0);
    const [score, setScore] = useState(0);
    const [accumulatedScore, setAccumulatedScore] = useState(0); // Puntuación acumulada
    const [time, setTime] = useState(60);

    const handleRestart = (increaseDifficulty) => {
        setShowModal(false);
        setGameKey(gameKey + 1);
        setScore(0);
        setTime(60);
        setAccumulatedScore(accumulatedScore + score); // Acumular puntuación
        if (increaseDifficulty) {
            setNumImages(prevNumImages => prevNumImages + 4);
        }
    };

    const handleEndGame = () => {
        setTimeout(() => {
            setShowModal(true);
        }, 3000);
    };

    const handleTimeOut = () => {
        setShowModal(true);
    };

    return (
        <div className="App">
            <h1>Matching Game</h1>
            <Scoreboard score={score} accumulatedScore={accumulatedScore} time={time} setTime={setTime} onTimeOut={handleTimeOut} />
            <Board
                key={gameKey}
                numImages={numImages}
                onEndGame={handleEndGame}
                setScore={setScore}
            />
            {showModal && <Modal onConfirm={handleRestart} />}
        </div>
    );
};

export default App;
