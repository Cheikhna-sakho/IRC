import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Register from "./Register";

const { default: MessageChanel } = require("../components/chanel/Message")
const { default: Layout } = require("../templates/Layout")

const Message = () =>{
    const {username} = useContext(UserContext)
    return username ? <Layout content={<MessageChanel/>}/>:<Register/>

}
export default Message;