import React, { useState } from "react";
import Citacao from "./citacao.tsx";
import Nota from "./notas.tsx";
import { exit } from "process";

const Header = () => {

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
    }

    return (
        <>
            <div>
                <h2>Bem-Vindo</h2> <br/>
                <button onClick={handleToggle}>Iniciar Votação</button>
                <h2>{frases[indice]}</h2>
                <br/> {mostrar && <Nota handleClick={HandleClick}></Nota>}
                
            </div>
        </>
    )
}

export default Header;