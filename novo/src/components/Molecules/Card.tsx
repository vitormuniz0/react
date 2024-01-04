import React from "react";

interface IcardProps {
    children?: number | string;
    name: string;
    key?: number| string;
}

const Card: React.FC<IcardProps> = (props) =>{
    return (
        <div className="card" {...props}>
            {props.name}
        </div>
    )
}

export default Card;