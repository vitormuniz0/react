import React from "react";


interface Icitacao {
    autor: string;
    texto: string;
}


const Citacao: React.FC <Icitacao> = ({autor,texto}) => {
    return (
        <>
            <p>{texto}</p>
            <footer>{autor}</footer>
        </>
    )
}

export default Citacao;