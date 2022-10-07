import { create, list } from "../components/chanel/Commade";
import socket from "../data/socket";

const { createContext, useState, useEffect } = require("react");

const CommandeContext = createContext(null)

export const CommadeContextProvider = ({ children }) => {
    const [chanel, setChanel] = useState();
    const [room, setRoom] = useState(null);
    const [chanels, setChanels] = useState(null);
    const command = {
        chanel, setChanel, chanels, setChanels, room, setRoom
    };

    useEffect(() => socket.on("join_chanel", getRoom => console.log("is join =>" +getRoom)),[])
    useEffect(() => {
        create(chanel);
        list(setChanels);
    }, [chanel]);
    return (
        <CommandeContext.Provider value={command}>
            {children}
        </CommandeContext.Provider>
    )
}
export default CommandeContext;