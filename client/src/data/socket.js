import io from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_SOCKET_URL;
console.log(ENDPOINT);
const socket = io.connect(ENDPOINT)
export default socket;