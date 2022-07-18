import React, { useState,createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { create } from "../chanel/Commade";
import socket from "../socket/socket";

const name = sessionStorage.getItem("username");
export const userContext = createContext(name);
const RegisterUser = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const handleChangeName = (e) => {setUsername(e.target.value)};
    const handleSubmit = (e)=>{
        e.preventDefault();
        sessionStorage.setItem("username", username);
        socket.emit("userLogin",username);
        create("invité");
        navigate("/welcom")
    }
    return (
        <div className="register">
            <form onSubmit={e => handleSubmit(e)}>
                <p>
                    <label htmlFor="username">Veillez saisir votre pseudo ou nom d'utilisateur</label>
                    <br/>
                    <input type={"text"} name="username" id="username" required minLength={3} onChange={e => handleChangeName(e)} />
                    <input type={"submit"} value="s'enregistrer" />
                </p>
            </form>
        </div>
    )
}
export default RegisterUser;