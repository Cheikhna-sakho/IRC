import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Register from "./Register";
import MessageChanel from "../components/messages/Message"

const Message = () => {
    const { username } = useContext(UserContext)
    return username ? <MessageChanel /> : <Register />

}
export default Message;