import Layout from "../templates/Layout";
import RegisterUser from "../components/auth/Register";

const Register = () => {
    return <Layout content={<RegisterUser/>}/>;
}
export default Register;