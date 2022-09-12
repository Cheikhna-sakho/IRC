import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Register from "./Register";
import MessageChanel from "../components/messages/Message"
import Layout from "../templates/Layout"

const Message = () => {
    const { username } = useContext(UserContext)
    return username ? <Layout content={<MessageChanel />} /> : <Register />

}
export default Message;