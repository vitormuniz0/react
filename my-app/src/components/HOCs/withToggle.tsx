import React from "react";
import {Component, useState } from "react";

 const withToggle = (Component:any) => {
    const WithToggle = (props:any) => {
        const [status, setStatus] = useState(false);

        const handleToggle = () => setStatus(!status) 

        return <Component {...props} status={status} onToggler={handleToggle} />
    }

    return WithToggle;
 };

 export default withToggle;