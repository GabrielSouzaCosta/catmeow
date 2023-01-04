import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContextInterface } from "../@types/context";




const StateContext = createContext<AppContextInterface | null >(null);

type ContextProps = {
    children: React.ReactNode,
}

export const ContextProvider = ({ children }: ContextProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    function toggleTheme(checked: boolean) {
        setTheme(() => checked ? 'dark' : 'light' );
        sessionStorage.setItem('theme', checked ? 'dark' : 'light')
    }

    return (
        <StateContext.Provider 
            value={{
                theme, toggleTheme, setTheme
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);