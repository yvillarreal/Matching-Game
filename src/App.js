import React, { useState } from 'react';
import Board from './components/Board';
import Modal from './components/Modal';

const App = () => {
    const [numImages, setNumImages] = useState(7);
    const [showModal, setShowModal] = useState(false);
    const [gameKey, setGameKey] = useState(0); // Nuevo estado para forzar un reinicio

    const handleRestart = () => {
        setShowModal(false);
        setGameKey(gameKey + 1); // Forzamos un nuevo render del componente Board
    };

    const handleEndGame = () => {
        setTimeout(() => {
            setShowModal(true);
        }, 3000); // Añadimos un retraso de 3 segundos
    };

    return (
        <div className="App">
            <h1>Matching Game</h1>
            <Board key={gameKey} numImages={numImages} onEndGame={handleEndGame} />
            {showModal && <Modal onConfirm={handleRestart} />}
        </div>
    );
};

export default App;
