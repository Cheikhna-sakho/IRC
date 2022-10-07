import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CommandeContext from "../../contexts/CommandContext";

// import { list } from "./Commade";


const ListChanel = () => {
    const navigate = useNavigate()
    const { setRoom, chanels} = useContext(CommandeContext);
    const HandleJoin = (chanel) => {
        setRoom(chanel);
        navigate("/msg");
    }

    return (
        <ul className="chanels-listener">
            {chanels && chanels.map((chanel, i) => {
                return (
                    chanel && <li className="chanel" key={i}>
                        <button className="bg-black radius" onClick={() => HandleJoin(chanel)}>
                            {chanel}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
export default ListChanel;