import './home.css';
import { GameContext } from '../context/GameContext';
import { useContext } from 'react';


export const Home = () => {
  const { setGameState, setUsername, username } = useContext(GameContext);

  return (
    <div className="home">
      <h1>Quiz App</h1>
      <h2 style={{color:'var(--color-primary)'}} >Can you guess the flags?</h2>
    <input type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
    <button className='btn btn-primary' onClick={() => {setGameState("game")}}>Play</button>
    </div>
  )
}
