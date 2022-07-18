export const joinChanel = (socket, chanel) => {

    if (chanel !== "") {
        try {
            socket.emit("join_chanel", chanel);
        } catch (error) { console.log(error); }
    }
}


// import { useNavigate } from "react-router-dom";
//     const navigate = useNavigate();
