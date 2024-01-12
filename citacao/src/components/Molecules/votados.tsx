import React from "react";


interface IVotados {
    autor: string;
    texto: string;
    nota:number;
}


const Votados:React.FC <IVotados> = ({autor,texto,nota}) => {
    return [(
        <>
            <p>{texto}</p>
            <footer>{autor}</footer>
            <p>{nota}</p>
        </>
    )]
}

export default Votados;