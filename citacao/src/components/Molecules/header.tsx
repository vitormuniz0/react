import React, { useState } from "react";
import Citacao from "./citacao.tsx";
import Nota from "./notas.tsx";
import { exit } from "process";
import Votados from "./votados.tsx";

const Header = (props) => {

    const[mostrarLista, setMostrarLista] = useState(false);
    const [mostrar, setMostrar] = useState(false);
    const [frases, setFrases] = useState([
        <Citacao autor={"aa"} texto={"aa"}></Citacao>,
        <Citacao autor={"bb"} texto={"bb"}></Citacao>,
        <Citacao autor={"cc"} texto={"cc"}></Citacao>,
        <Citacao autor={"dd"} texto={"dd"}></Citacao>,
        <Citacao autor={"ee"} texto={"ee"}></Citacao>,
        <Citacao autor={"ff"} texto={"ff"}></Citacao>,
        <Citacao autor={"gg"} texto={"gg"}></Citacao>,
        <Citacao autor={"hh"} texto={"hh"}></Citacao>,
        <Citacao autor={"ii"} texto={"ii"}></Citacao>,
        <Citacao autor={"jj"} texto={"jj"}></Citacao>,

    ]);

    const [indice , setIndice] = useState(0);

    const [lista , setLista] = useState([
        <Votados autor={"aa"} texto={"aa"} nota={props.value}></Votados>,
        <Votados autor={"bb"} texto={"bb"} nota={0}></Votados>,
    ])

    const mostrarProximaFrase = () => {
        if(indice < frases.length - 1) {
            setIndice((prevIndice) => prevIndice + 1);
        } else {
        setMostrar(false);
        };
    }

    const handleToggle = () => {
        setMostrar(!mostrar)
        setIndice(0);
    }

    const HandleClick = () => {
        mostrarProximaFrase();
        setMostrarLista(!mostrarLista)

        
    }

    return (
        <>
            <div>
                <h2>Bem-Vindo</h2> <br/>
                <button onClick={handleToggle}>Iniciar Votação</button>
                <h2>{frases[indice]}</h2>
                <br/> {mostrar && <Nota handleClick={HandleClick}></Nota>}
                <h2>{mostrarLista && [lista[indice]]}</h2>
                
                
            </div>
        </>
    )
}

export default Header;