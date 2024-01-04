import React from "react";
import Citacao from "./citacao.tsx";

const Header = () => {

    const votacao = () =>{
        return(
            <Citacao autor={""} texto={""}></Citacao>
        );
    }

    return (
        <>
            <h2>Bem-Vindo</h2> <br/>
            <button onClick={votacao}>Iniciar Votação</button>
        </>
    )
}