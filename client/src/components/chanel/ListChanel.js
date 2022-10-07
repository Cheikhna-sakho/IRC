import React, { useContext } from "react";

import CommandeContext from "../../contexts/CommandContext";
import UserContext from "../../contexts/UserContext";

// import { list } from "./Commade";


const ListChanel = () => {
    const { chanels } = useContext(UserContext);
    const { setRoom } = useContext(CommandeContext);
    const HandleJoin = (chanel) => {
        setRoom(chanel);
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