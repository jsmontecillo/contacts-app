import {useState} from "react";
import './home.css';
import ViewContacts from './viewcontacts.js';
import calendar from './icons/cal.png';
import photo from './icons/photo.png';

function Home() {
  const [correct, isCorrect] = useState(true);
  const [guess, setGuess] = useState([]);
  let today = new Date();
  let passcode = [3, 6, 9, 9];

  const handleInput = () => {

  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
    <div className="home">
    {correct ? (
      <div className="all-apps">
        <span className="app">
          <img src={calendar} alt="calendar" />
        </span>
        <span className="app">
          <img src={photo} alt="photos" />
        </span>
        <span className="app">

        </span>
      
      </div>
    ) : (
      <>
      <div className="date">
      {months[today.getMonth()-1]}
    </div>
    <div className="passcode">
      <div className="wrapper">
        <span className="num">1</span>
        <span className="num">2</span>
        <span className="num">3</span>
        <br/>
        <span className="num">4</span>
        <span className="num">5</span>
        <span className="num">6</span>
        <br/>
        <span className="num">7</span>
        <span className="num">8</span>
        <span className="num">9</span>
        <br/>
        <span className="num">0</span>
      </div>
    </div>
    </>
    )}
    </div>
  );
}

export default Home;