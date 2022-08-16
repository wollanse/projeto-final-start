import React from "react";
import Contexts from "./Context";
import useStorage from "../utils/useStorage";


const Provider = ({ children }) => {
    const [token, setToken] = useStorage("token");
    
    return(
        <Contexts.Provider
        value={{
            token,
            setToken,
        }}
        >
           {children}
        </Contexts.Provider>
    )
}

export default Provider;