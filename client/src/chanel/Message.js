import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import socket from "../socket/socket";
import useUsername from "../user/user";

import GetMsg from "./GetMsg";
import { joinChanel } from "./join";

import SendMsg from "./SendMessage";

const MessageChanel = () => {
    const username = useUsername();
    const location = useLocation();
    const room = location.state;

    const sendData = { chanel: room, user: username };
    const [recieve, setRecieve] = useState([]);

    //
    useEffect(() => joinChanel(socket, room), [location,room])
    useEffect(() => {
        socket.on("recieve_msg", message => {
            setRecieve((data) => [...data, message]);
            // message.user !== username ? setUserClass("") : setUserClass("auth");
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
