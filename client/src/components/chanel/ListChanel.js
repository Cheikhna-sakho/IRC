import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { list } from "./Commade";


const ListChanel = () => {
    const navigate = useNavigate();
    const [chanels, setChanels] = useState([]);
    const HandleJoin = (chanel) => {
        navigate("/msg", { state: chanel });
    }
    useEffect(() => {
        list(setChanels);
    }, []);
    return (
        <ul className="chanels-listener">
            {chanels.map((chanel, i) => {
                return (
                    <li className="chanel" key={i}>
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