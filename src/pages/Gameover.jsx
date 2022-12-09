import { useContext } from 'react';
import { Questions } from '../helpers/Questions';
import './gameover.css';

//Context
import { GameContext } from '../context/GameContext';

export const Gameover = () => {
    const {username, score, setGameState, setScore, setRound} = useContext(GameContext);

    const restartGame = () => {
        setScore(0);
        setRound(0);
        setGameState("home");
    };

    return (
    <div className='gameover'>
        <h1>Game Over</h1>
        <h3>{username}</h3>
        <h2 style={{color: 'var(--color-primary)'}}>Score:</h2>
        <h1 style={{color: 'var(--color-primary)'}} >{score} / {Questions.length}</h1>
        <button className='btn btn-primary' onClick={restartGame}>Play Again</button>
    </div>
  )
}
