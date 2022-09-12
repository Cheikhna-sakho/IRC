import { useContext } from "react";
import MessageChanel from "../components/messages/Message";
import UserContext from "../contexts/UserContext";
import Layout from "../templates/Layout";
import Register from "./Register";

const Home = () => {
    const { username } = useContext(UserContext);
    return username ? <Layout content={<MessageChanel />} /> : <Register />
}
export default Home;