import { useContext } from "react";
import { userContext } from "./Register";

const useUsername = ()=> useContext(userContext);
export default useUsername;