import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Basics } from './components/Basics'
import { MajorScales } from './components/MajorScales/MajorScales'

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className='App'>
      {pageNumber === 1 && <Basics setPageNumber={setPageNumber} />}
      {pageNumber === 2 && <MajorScales setPageNumber={setPageNumber} />}
      {/* <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button> */}
    </div>
  );
}

export default App;
