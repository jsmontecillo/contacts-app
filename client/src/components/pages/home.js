import {useState, useEffect} from "react";
import './home.css';
import MyApps from './apps.js';

function Home() {
  const [correct, setCorrect] = useState(localStorage.getItem('PASSCODE_IS_CORRECT') === 'true');
  const [guess, setGuess] = useState([]);
  let today = new Date();
  let passcode = [3, 6, 9, 9];

  useEffect(() => {
    console.log('correct', correct);
    localStorage.setItem('PASSCODE_IS_CORRECT', JSON.stringify(correct));
  }, [correct])

  const handleGuess = (num) => {
    setGuess([...guess, num]);
    if(guess.length === 4) {
      checkGuess();
    }
  }


  const checkGuess = () => {
    let same = true;
    for(let i = 0; i < 4; i++) {
      if(Number(guess[i]) != passcode[i]){
        same = false;
      }
    }
    console.log(same);
    setCorrect(same);
  }



  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
    <div className="home">
    {correct ? (
      <>
      <MyApps />
      <button type="button" onClick={() => {setCorrect(!correct)}} className="lock">Lock</button>
      </>
    ) : (
      <>
      <div className="time">12:00PM</div>
      <div className="date">
      {months[today.getMonth()-1]}
    </div>
    <div className="passcode">
      <div className="wrapper">
        <span className="num" onClick={() => {handleGuess(1)}}>1</span>
        <span className="num" onClick={() => {handleGuess(2)}}>2</span>
        <span className="num" onClick={() => {handleGuess(3)}}>3</span>
        <br/>
        <span className="num" onClick={() => {handleGuess(4)}}>4</span>
        <span className="num" onClick={() => {handleGuess(5)}}>5</span>
        <span className="num" onClick={() => {handleGuess(6)}}>6</span>
        <br/>
        <span className="num" onClick={() => {handleGuess(7)}}>7</span>
        <span className="num" onClick={() => {handleGuess(8)}}>8</span>
        <span className="num" onClick={() => {handleGuess(9)}}>9</span>
        <br/>
        <span className="num" onClick={() => {handleGuess(0)}}>0</span>
      </div>
    </div>
    </>
    )}
    </div>
  );
}

export default Home;