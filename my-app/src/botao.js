import React, { useState } from 'react';

const Botao = () =>{
    const[soma, setSoma] = useState(0);
    const[frase, setFrase] = useState("Meu nome é ");
    
    console.log ("Soma", soma);
    console.log ("Frase", frase);

    const handle = () => {
        setSoma(soma + 1);
    }

    const handleFrase = () => {
        setFrase(frase + " Vitor");
    }

    return (<>
    <button onClick={handle}>Me Clique</button>
    <button onClick={handleFrase}>Nome</button>
    </>);
}

export default Botao;