import React, { useState } from 'react';
import Board from './components/Board';
import Modal from './components/Modal';
import Scoreboard from './components/Scoreboard';

const App = () => {
    const [numImages, setNumImages] = useState(4);
    const [showModal, setShowModal] = useState(false);
    const [gameKey, setGameKey] = useState(0); // Nuevo estado para forzar un reinicio
    const [score, setScore] = useState(0); // Estado para la puntuación
    const [time, setTime] = useState(60); // Estado para el temporizador

    const handleRestart = () => {
        setShowModal(false);
        setGameKey(gameKey + 1); // Forzamos un nuevo render del componente Board
        setScore(0); // Reiniciamos la puntuación
        setTime(60); // Reiniciamos el tiempo
    };

    const handleEndGame = () => {
        setTimeout(() => {
            setShowModal(true);
        }, 3000); // Añadimos un retraso de 3 segundos
    };

    return (
        <div className="App">
            <h1>Matching Game</h1>
            <Scoreboard score={score} time={time} setTime={setTime} />
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
