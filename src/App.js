import logo from './logo.svg';
import './App.css';
import Async from './Async';
import {useState} from 'react';

function App() {
  const [changeText, setChangeText] = useState(false);
  //const changeHandlerCLick
  const changeHandlerCLick = () => {
    setChangeText(!changeText);
  }

  return (
    <div className="App">

     {!changeText && <h2>xin chao</h2>}
     {changeText ? <h2>hello</h2> : <h2>bye</h2>}
     <button onClick={changeHandlerCLick} >change text</button>
    </div>
  );
}

export default App;
