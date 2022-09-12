import CreateChanel from "../components/chanel/Create";
import ListChanel from "../components/chanel/ListChanel";
const Onglet = () => {
    return (
        <div className="onglet bg-white radius grid-row">
            <div className="onglet-head">
                <CreateChanel />   
            </div>
            <ListChanel />
        </div>
    );
}
export default Onglet;