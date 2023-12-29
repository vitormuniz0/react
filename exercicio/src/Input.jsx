import withToggle from "./withToggle.jsx";

const Input = (props) =>{
    
    if(props.status){
        
        return( <>
            <input onMouseOut={props.onToggle} type="number"></input> <br/>
            <span>Mouse Selecionado</span>
        </>)
    } 
    
    return <input onMouseOver={props.onToggle} type="number"></input>

    
}

export default withToggle(Input);