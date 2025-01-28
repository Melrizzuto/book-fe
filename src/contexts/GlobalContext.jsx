import { createContext, useContext, useState } from "react";

// Crea il contesto
const GlobalContext = createContext();

// Fornisce il contesto ai componenti figli
const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const data = {
        isLoading,
        setIsLoading
    };

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook per utilizzare il contesto
function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };
