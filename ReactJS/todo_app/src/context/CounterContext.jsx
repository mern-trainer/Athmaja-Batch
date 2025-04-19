import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    return <Context.Provider value={{ counter, setCounter }}>
        {children}
    </Context.Provider>
}

export const useCounter = () => {
    return useContext(Context);
}

// const a = useContext(Context)
// const b = useCounter()