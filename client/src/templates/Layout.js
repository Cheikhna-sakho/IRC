import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import Onglet from "./Onglet";

const Layout = ({ children }) => {
    const {username} = useContext(UserContext);
    return (
        <div className="body-page grid-row bg-red">
            <Header />
            <main className="grid-col center">
                {username && <Onglet />}
                <div className="cont bg-black radius">
                
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Layout;