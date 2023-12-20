import App from '../Organismos/App';
import { useState } from 'react';

const Historico = (props) => {
  const [historico, setHistorico] = useState([]);

  const armazenar = () => {
    // Update historico based on the previous state
    setHistorico((prevHistorico) => [...prevHistorico, props.resultado]);
  };

  return (
    <>
      <button onClick={armazenar}>Armazenar</button> <br />
      <span>
        Historico: {historico.map((item, index) => <div key={index}>{item}</div>)}
      </span>
    </>
  );
};

export default Historico;
