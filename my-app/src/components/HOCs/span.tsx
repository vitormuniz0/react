import React from "react";
import withToggle from "./withToggle";


const Span: React.FC<{
    children:number | string ;
    status: boolean
    onToggle: () => void;
}> = (props) => {

    if(props.status){
        return <input onClick={props.onToggle} value={0}/>
    }

    return <span onClick={props.onToggle}>0</span>
}

export default withToggle(Span);