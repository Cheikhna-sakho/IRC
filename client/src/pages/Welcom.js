import Layout from "../templates/Layout";

const Welcom = () => {
    const user = sessionStorage.getItem('username');
    const JsxHome = ()=>{
        return(
            <div>
                <p>Bienvenue {user} sur SOCKET.IO</p>
                <p>Creer votre propre chanel avec vos amis ou rejoignez les utilisateur du monde entier dans les canal deja disponible</p>
            </div>
        )
    }
    return <Layout content={<JsxHome/>}/>
}
export default Welcom;