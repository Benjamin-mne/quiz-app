import './app.css'
import { useState } from 'react';

//Pages
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Gameover } from './pages/Gameover';

//Context
import { GameContext } from './context/GameContext';

function App() {
  const [gameState, setGameState] = useState("home");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  return (
    <GameContext.Provider value={{ gameState, setGameState, username, setUsername, score, setScore, round, setRound }}>
      <div className="app">
        <div className="app__container">
            {gameState === "home" && <Home/>}
            {gameState === "game" && <Game/>}
            {gameState === "gameover" && <Gameover/>}
            {gameState === "game" && <div className='game__score'> {round} / 31</div>}
        </div>
      </div>
    </GameContext.Provider>
  )
}

export default App
