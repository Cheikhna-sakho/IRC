import { create, list } from "../components/chanel/Commade";
import socket from "../data/socket";

const { createContext, useState, useEffect, useContext } = require("react");

const CommandeContext = createContext(null)

export const CommadeContextProvider = ({ children }) => {
    const [chanel, setChanel] = useState(null);
    const [room, setRoom] = useState(null);
    const [chanels, setChanels] = useState(null);
    const command = {
        chanel, setChanel,
        chanels, setChanels,
        room, setRoom
    };

    useEffect(() => {
        socket.on("actual_chanel", getRoom => {
              getRoom?.trim() && setRoom(getRoom);
        })
    }, []);

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

export const ChanelDataContext = () => {
    const {contextChanel} = useContext(CommandeContext);

    return contextChanel;
}
export const ChanelsDataContext = () => {
    const {contextChanels} = useContext(CommandeContext);
    return contextChanels
}
export const RoomDataContext = () => {
    const {room,setRoom} = useContext(CommandeContext);
    return {room,setRoom};
}
export default CommandeContext;