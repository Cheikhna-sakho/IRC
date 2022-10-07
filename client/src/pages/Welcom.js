import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Welcom = () => {
    const {username} = useContext(UserContext);
    return (
        <div>
            <p>Bienvenue {username} sur SOCKET.IO</p>
            <p>Creer votre propre chanel avec vos amis ou rejoignez les utilisateur du monde entier dans les canal deja disponible</p>
        </div>
    )
}
export default Welcom;