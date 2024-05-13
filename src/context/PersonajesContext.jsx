import { createContext, useState, useEffect } from "react";

export const PersonajesContext = createContext();

const PersonajesProvider = ({children}) => {
    const [Personajes, setPersonajes] = useState ([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/photos.json");
                if (!response.ok){
                    throw new Error("Error al obtener los datos");
                }
                const data = await response.json();
                setPersonajes(data);
                console.log("Datos de las imagenes:",data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
            };
            fetchData();
            }, []);
            return (
            <PersonajesContext.Provider value={{Personajes}}>
            {children}
            </PersonajesContext.Provider>    
    );
};

export default PersonajesProvider;