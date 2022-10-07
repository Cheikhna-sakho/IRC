import { useContext } from "react";
import MessageChanel from "../components/messages/Message";
import UserContext from "../contexts/UserContext";
import Register from "./Register";

const Home = () => {
    const { username } = useContext(UserContext);
    return username ? <MessageChanel /> : <Register />
}
export default Home;