import Footer from "./Footer";
import Header from "./Header";
import Onglet from "./Onglet";

const Layout = ({ children }) => {
    return (
        <div className="body-page grid-row bg-red">
            <Header />
            <main className="grid-col center">
                <Onglet />
                <div className="cont bg-black radius">
                
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Layout;