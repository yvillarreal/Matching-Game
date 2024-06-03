import React, { useState } from 'react';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import Navbar from './components/Navbar'; // Importar Navbar
import About from './components/About'; // Importar About

const App = () => {
    const [numImages] = useState(4);
    const [gameKey, setGameKey] = useState(0);
    const [score, setScore] = useState(0);
    const [accumulatedScore, setAccumulatedScore] = useState(0);

    const handleRestart = () => {
        setTimeout(() => {
            setGameKey(gameKey + 1);
            setScore(0);
            setAccumulatedScore(accumulatedScore + score);
        }, 2000);
    };

    return (
        <div className="App">
            <Navbar />
            <h1>Matching Game</h1>
            <Scoreboard score={score} accumulatedScore={accumulatedScore} />
            <Board
                key={gameKey}
                numImages={numImages}
                setScore={setScore}
                onEndGame={handleRestart}/>
            <About />
            <footer>
                Build with ❤ by Yamil for my daughter Zoe
            </footer>
        </div>
    );
};

export default App;