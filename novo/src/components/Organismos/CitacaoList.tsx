import React from "react";
import Card from "../Molecules/Card.tsx";

interface ICitacaoResult {
    name: string;
}

interface ICitacao {
    results: ICitacaoResult[];
}

interface ICitacaoListProps{
    data: ICitacao | undefined;
    status: string;
}

const CitacaoList : React.FC<ICitacaoListProps> = ({data,status}) => {
    const CitacaoCard = (citacao: ICitacao) => {
        return citacao.results.map((citacaoResult) => {
            return<Card key={citacaoResult.name} name={citacaoResult.name}></Card>;
        });
    };
    return (
        <div>
            {status === "loading" && <div>Loading...</div>} 
            {status === "error" && <div>Error fetching pokemons...</div>} 
            {status === "success" && data && data.results ? (
                <div>{CitacaoCard(data)}</div>
            ) : ( 
                <div>No data available</div>
        )}

        </div>
    )
}

export default CitacaoList;
