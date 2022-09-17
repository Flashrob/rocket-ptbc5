import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Heading(props) {
  return <h1>{props.caption}</h1>;
}
// function() { return setNumState(numState + 1) }
// () => setNumState(numState + 1)
// () => { return setNumState(numState + 1) }
// These three are all the same

// onClick={() => setNumState(numState + 1)} === document.querySelector(button).addEventlistener("click", () => setNumState(numState + 1))
function Button(props) {
  const [numState, setNumState] = useState(3);
  console.log(numState);


  return (
    <>
      <button onClick={() => setNumState(numState + 1)}>
        Click me
      </button>
      <Heading caption={numState}/>
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
