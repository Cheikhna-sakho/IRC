import { Link } from "react-router-dom";
const Out = () => {
    return (
        <nav>

            <ul className="grid-col nav-ul">
                <li><Link to={"/register"}>Enregister-vous</Link></li>
            </ul>
        </nav>
    )
}
export default Out;