import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {
  const [calculation, setCalculation] = useState(0);

  return (
    <>
      <Display />
      <Buttons/>
    </>
  )
}

export default App;
