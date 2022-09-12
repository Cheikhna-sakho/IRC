import io from "socket.io-client";
const ENDPOINT = "http://localhost:2323";
const socket = io.connect(ENDPOINT)
export default socket;