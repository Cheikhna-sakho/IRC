import CreateChanel from "../chanel/Create";
import ListChanel from "../chanel/ListChanel";
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