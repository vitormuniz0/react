import React, { useState } from 'react';
import './App.css';
import Historico from './historico.js';

function App() {
  
  const [primeiroNumber, setPrimeiroNumber] = useState(0);
  const [segundoNumber, setSegundoNumber] = useState(0);
  const [result, setResult] = useState(0);

  const soma = () =>{

    setResult(primeiroNumber + segundoNumber)
  }

  const subtrair = () =>{
    setResult(primeiroNumber - segundoNumber)
  }

  const multiplicar = () =>{
    setResult(primeiroNumber * segundoNumber)
  }

  const dividir = () =>{
    setResult(primeiroNumber / segundoNumber)
  }
  
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
    <button onClick={soma}>+</button>
    <button onClick={subtrair}>-</button>
    <button onClick={multiplicar}>*</button>
    <button onClick={dividir}>/</button> <br/> <br/>
    
    <Historico resultado={result}></Historico>
  

    </>
  );
}

export default App;
