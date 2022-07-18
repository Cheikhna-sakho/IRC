import { useState } from "react";
import Log from "../components/nav/NavLog";
import Out from "../components/nav/NavOut";
const Navbar = () => {
    const userStatus = sessionStorage.getItem("username");
    return (
        userStatus ? <Log /> : <Out />
    );
}
export default Navbar;