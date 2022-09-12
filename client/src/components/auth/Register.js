import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { create } from "../chanel/Commade";
import socket from "../../data/socket";

import UserContext from "../../contexts/UserContext";

const RegisterUser = () => {
    
    const navigate = useNavigate();
    const [usernameT, setUsernameT] = useState("");
    const {setUsername} = useContext(UserContext);

    const handleChangeName = (e) => {setUsernameT(e.target.value)};
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUsername(usernameT);
        socket.emit("userLogin",usernameT);
        create("invité");
        navigate("/msg")
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