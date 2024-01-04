import React, { useState } from "react";
import Citacao from "./citacao.tsx";

const Header = () => {

    const [mostrar, setMostrar] = useState(false);

    const handleToggle = () => {
        setMostrar(!mostrar)
    }

    return (
        <>
            <div>
                <h2>Bem-Vindo</h2> <br/>
                <button onClick={handleToggle}>Iniciar Votação</button>
                {mostrar && <Citacao autor={"aaaaaa"} texto={"aaaaaaa"} ></Citacao>}
            </div>
        </>
    )
}

export default Header;