import React, { useEffect, useState } from "react";

const withToggle = (Componet) =>{
    const WithToggle = (props) => {
        const [status, setStatus] = useState(true);
        const handleToggle = () => setStatus(!status);

        return <Componet {...props} status={status} onToggle={handleToggle}/>
    } 

    return WithToggle;
}

export default withToggle;