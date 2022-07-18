import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="bg-black">
            <header className="grid-col head center">
                <div className="logo"><span className="logo-span">My_</span>IRC</div>
                <Navbar />
            </header>
        </div>
    );
}
export default Header;