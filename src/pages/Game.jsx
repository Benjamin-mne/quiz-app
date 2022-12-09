import './game.css';
import { Questions } from '../helpers/Questions'
import { useContext, useEffect, useRef, useState } from 'react';

//Context
import { GameContext } from '../context/GameContext';

export const Game = () => {
    const { score, setScore, setGameState, round, setRound } = useContext(GameContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState(10);

    const [pause, setPause] = useState(false);

    const optionA = useRef();
    const optionB = useRef();
    const optionC = useRef();
    const optionD = useRef();

    const checkCorrect = (option) =>{
      if(Questions[currentQuestion].asnwer === option.current.value){
        option.current.style.backgroundColor = 'green';
        setScore(score + 1);
        setTimeout(function(){
          option.current.style.backgroundColor = 'var(--color-primary)'
          setTimer(10);
          setCurrentQuestion(currentQuestion + 1);
          setPause(false);
          setRound(round + 1);
        }, 1000);
      }
      else{
        option.current.style.backgroundColor = 'red';
        setTimeout(function(){
          option.current.style.backgroundColor = 'var(--color-primary)';
          setTimer(10);
          setCurrentQuestion(currentQuestion + 1);
          setPause(false);
          setRound(round + 1);
        }, 1000);
      }
    }

    const nextQuestion = (option) => {
      setPause(true);
      if (option){
        checkCorrect(option);
      }
      else{
        setCurrentQuestion(currentQuestion + 1);
        setRound(round + 1);
        setTimer(10);
      }

      setTimeout(function(){
        if (currentQuestion == Questions.length - 1){
          setGameState("gameover");
        }
      }, 1000);
    };

    useEffect(() =>{
        if (!pause){
          const interval = setInterval(() => {
            setTimer((prev) => prev - 1 );
          }, 1000);
          return () => clearInterval(interval);
        }
    },[timer, pause]);

    useEffect(() => {      
      if (timer === 0){
        nextQuestion('');
        setTimer(10);
        setPause(false);
        setRound(round + 1);
      }
    },[timer])

    return (
        <div className='game'>
           <div className='game__img-container'>
            <img src={Questions[currentQuestion].urlImg} alt="flag-img" />
           </div>
           <div className='timer'>
            <div className='time' style={{width:`${timer * 10}%`}}></div>
           </div>
           <div className='game__asnwer-container'>
                <button className='btn btn-primary' ref={optionA} value='optionA' onClick={() => {if(!pause){nextQuestion(optionA);}}}>{Questions[currentQuestion].optionA}</button>
                <button className='btn btn-primary' ref={optionB} value='optionB' onClick={() => {if(!pause){nextQuestion(optionB);}}}>{Questions[currentQuestion].optionB}</button>
                <button className='btn btn-primary' ref={optionC} value='optionC' onClick={() => {if(!pause){nextQuestion(optionC);}}}>{Questions[currentQuestion].optionC}</button>
                <button className='btn btn-primary' ref={optionD} value='optionD' onClick={() => {if(!pause){nextQuestion(optionD);}}}>{Questions[currentQuestion].optionD}</button>
           </div>
        </div>
    )
}
