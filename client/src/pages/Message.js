import Register from "./Register";

const { default: MessageChanel } = require("../chanel/Message")
const { default: Layout } = require("../templates/Layout")

const Message = () =>{
    const session = sessionStorage.getItem("username");
  
    return session ? <Layout content={<MessageChanel/>}/>:<Register/>
}
export default Message;