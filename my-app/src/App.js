import logo from './logo.svg';
import './App.css';
import Botao from './components/Atoms/Button';
import Span from './components/Atoms/Span.tsx';
import withToggle from "./components/HOCs/withToggle.tsx";


function App() {
  return (
    <>
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Meu Primeiro App
          </p>
          <Botao></Botao>
          <Span></Span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
