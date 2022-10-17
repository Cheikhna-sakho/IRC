import { useState } from "react";
import {myCommande} from "../chanel/Commade";

const SendMsg = ({ socket, sendData, setData, getListChanel }) => {

    const [msg, setMsg] = useState("");
    const handleChange = e => setMsg(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        const date = new Date().toLocaleString();
        console.log("date",date);
        const data = { message: msg, ...sendData,date};
        try {

            if (msg[0] === "/") {
                let getCmd = myCommande.find(cmd => msg.split(" ")[0] === `/${cmd.command}`);
                if (getCmd) {
                    const cmd = getCmd.command;
                    const value = msg.substring(cmd.length + 1).trim();
                    getCmd.call(value);
                } else {
                    console.log('pas trouver');
                    socket.emit("not_found", "command introuvable")
                }
                // setData((socketData) => [...socketData, data]);
            } else {
                socket.emit("msg", data)
                setData((socketData) => [...socketData, data]);
            }
            e.target["msg"].value = "";
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <p>
                    <input type={"text"} name="msg" id="msg" onChange={e => handleChange(e)} required />
                    <input type={"submit"} value="envoyer" />
                </p>
            </form>
        </div>
    )
}
export default SendMsg;