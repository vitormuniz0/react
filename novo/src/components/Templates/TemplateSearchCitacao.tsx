import React from "react";
import CitacaoList from "../Organismos/CitacaoList.tsx";
import SearchCitacao from "./SeachCitacao.tsx";

interface ICitacao {
    result: {
        name: string;
    }[];
}

interface ISearchCitacaoProps{
    data: ICitacao;
    status: string;
}
 
const TemplateSearchCitacao : React.FC<ISearchCitacaoProps> = ({
    data,
    status,
}) => {
    return (
        <>
            <header>
            <h2>Bem Vindo</h2> <br/>
            <button>Iniciar Votação</button>
            <CitacaoList data={data} status= {status} />;
            </header>
        </>
    )
}

export default TemplateSearchCitacao;