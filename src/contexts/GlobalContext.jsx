import { createContext, useContext, useState } from "react";

// Creo il contesto globale che sarà condiviso tra i componenti
const GlobalContext = createContext();

// Componente GlobalProvider che fornisce il contesto ai componenti figli
const GlobalProvider = ({ children }) => {
    // Stato per gestire il caricamento (isLoading) e la sua funzione di aggiornamento
    const [isLoading, setIsLoading] = useState(false);

    // Oggetto che contiene lo stato e la funzione per aggiornarlo
    const data = {
        isLoading,
        setIsLoading
    };

    // Il GlobalContext.Provider avvolge i componenti figli e fornisce loro il contesto
    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook personalizzato per utilizzare facilmente il contesto in altri componenti
function useGlobalContext() {
    // Uso del contesto tramite useContext
    const context = useContext(GlobalContext);

    // Ritorno il contesto per poterlo utilizzare nei componenti
    return context;
}

// Esporto il GlobalProvider per avvolgere i componenti e il hook useGlobalContext per usarlo nei componenti
export { GlobalProvider, useGlobalContext };

