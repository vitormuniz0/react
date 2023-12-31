//Exemplo de tipagem com ts
interface IButtonProps{
    mensagemNoClique: string;
    onAcaoDeClique: (message: string) => void;
    children: string | React.ReactElement | React.ReactElement[];
}

const Button: React.FC<IButtonProps> = (props) => {
    console.log("Props" , props)

    return (
        <>
         <button onClick={() => props.onAcaoDeClique(props.mensagemNoClique)}>
            {props.children}
         </button>
        </>
    );
};

export default Button;