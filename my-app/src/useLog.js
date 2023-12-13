import React, {useEffect } from 'react';

function useLog(state) {
    useEffect(logger, [state]);        // hooks customizado

    function logger(){
        console.log("Efeito colateral", state);
    }

}

export default useLog;