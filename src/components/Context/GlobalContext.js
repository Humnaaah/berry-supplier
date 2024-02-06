import React,{createContext, useEffect, useReducer, useState} from "react"

let reducer = (active, setActive) =>{
    if(setActive === null){
        localStorage.removeItem("active");
        return initialState
    }
    return {...active, setActive};
};

const initialState ={
    active:'home'
}

const localState = localStorage.getItem("active");

export const GlobalContext = createContext(initialState);

export const GlobalProvider=({children})=>{
    const [active, setActive] = useReducer(reducer, localState || initialState);

    useEffect(() => {
        localStorage.setItem("active", active);
        console.log('Global State link type info', active)
      }, []);

    return(
        <GlobalContext.Provider value={{active, setActive}}>
            {children}
        </GlobalContext.Provider>
    )
}

