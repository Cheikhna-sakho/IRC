import { createContext, useEffect, useState } from 'react'

import socket from '../data/socket';
import useSession from '../hooks/useSession';

const UserContext = createContext(null);
export const UserContextProvider = ({ children }) => {
    const [username, setUsername] = useSession('username', null);
    const [chanel,setChanel] = useState();
    const [chanels, setChanels] = useState([]);

    useEffect(() => {
        socket.on("new_name", newName => setUsername(newName));
    }, [setUsername]);

    return (
        <UserContext.Provider value={{ username, setUsername,chanel,setChanel, chanels,setChanels }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext