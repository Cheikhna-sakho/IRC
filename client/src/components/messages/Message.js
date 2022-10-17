import { useContext, useEffect, useState } from "react";
import CommandeContext from "../../contexts/CommandContext";
import UserContext from "../../contexts/UserContext";
import socket from "../../data/socket";
import { join } from "../chanel/Commade";
import GetMsg from "./GetMsg";


import SendMsg from "./SendMessage";

const MessageChanel = () => {
    const {username} = useContext(UserContext);
    const {room} = useContext(CommandeContext);
    const sendData = { chanel: room, user: username };
    const [recieve, setRecieve] = useState([]);

    useEffect(() => {
        console.log("room=",room);
        room && join(room)
    }, [room])
    useEffect(() => {
        socket.on("recieve_msg", message => {
            setRecieve((data) => [...data, message]);
        });
    }, []);
    return (
        <section className="grid-row msg-box">
            <div className="head-msg bg-white grid-row">
                <div className="title"><h2>Chanel {room}</h2></div>
            </div>
            <div className="main-msg">
                <GetMsg msgs={recieve} />
            </div>
            <SendMsg sendData={sendData} setData={setRecieve} socket={socket} />
        </section>
    )
}

export default MessageChanel;
