import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [primeiroNumber, setPrimeiroNumber] = useState(0);
  const [segundoNumber, setSegundoNumber] = useState(0);
  const [result, setResult] = useState(0);
  
  return (
    <>
    <h1>Calculadora</h1>
    <div className='card'>
      <label>
        Primeiro Número <br/>
        <input onChange={ e => setPrimeiroNumber(Number(e.target.value))}>
        </input> <br/> <br/>
      </label>
      <label>
        Segundo Número <br/>
        <input onChange={ e => setSegundoNumber(Number(e.target.value))}>
        </input> <br/> <br/>
      </label>
      <span>Resultado: {result}</span> <br/> <br/>
    </div>
    <button onClick={ () => setResult(primeiroNumber + segundoNumber)}>+</button>
    <button onClick={ () => setResult(primeiroNumber - segundoNumber)}>-</button>
    <button onClick={ () => setResult(primeiroNumber * segundoNumber)}>*</button>
    <button onClick={ () => setResult(primeiroNumber / segundoNumber)}>/</button>
    </>
  );
}

export default App;
