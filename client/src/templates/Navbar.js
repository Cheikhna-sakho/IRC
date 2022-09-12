import { useContext } from "react";
import Log from "../components/nav/NavLog";
import UserContext from "../contexts/UserContext";

const Navbar = () => {
    const { username } = useContext(UserContext);
    return username && <Log />;
}
export default Navbar;