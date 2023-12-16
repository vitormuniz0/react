import React, { useState } from 'react';
import App from './App.js';

const Historico = (props) =>{
    
    const[ historico, sethistorico] = useState(0);

    const armazenar = () => {
        sethistorico([props.resultado]);
    }

    return (<>
    <span>Histórico:{sethistorico}</span>
    
    </>)


}

export default Historico;