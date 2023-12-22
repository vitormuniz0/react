import React from "react";
import withToggle from "../HOCs/withToggle";

const Span = (props: { status: any; onToggler: React.MouseEventHandler<HTMLInputElement> | undefined; }) => {
   
    if(props.status){
        return(<input value={3} onClick={props.onToggler}/>)
    }
    
    return(<span>0</span>)
}

export default  withToggle(Span);