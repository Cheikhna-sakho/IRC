import React, { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import CommandeContext from "../../contexts/CommandContext";
// import UserContext from "../../contexts/UserContext";


const CreateChanel = () => {
    const navigate = useNavigate();
    const [newChanel,setNewChanel] = useState(null);
    const {setChanel} = useContext(CommandeContext);
    const handleChange = (e) => setNewChanel(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newChanel);
        try {
            setChanel(newChanel);
            navigate("/msg")
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