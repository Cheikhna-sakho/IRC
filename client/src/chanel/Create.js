import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { create } from "./Commade";

const CreateChanel = () => {
    const navigate = useNavigate();
    const [chanel, setChanel] = useState(null);
    const handleChange = (e) => setChanel(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            create(chanel)
            navigate("/msg", { state: chanel });
        } catch (error) { console.log(error) };
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <p className="grid-col">
                <input type={"text"} name="createCnl" id="createCnl" required minLength={2} onChange={e => handleChange(e)} />
                <input type={"submit"} value="creer votre chanel" />
            </p>

        </form>
    )
}
export default CreateChanel;