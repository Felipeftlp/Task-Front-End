import { useContext } from "react";
//Importa o context criado
import { AuthContext } from "../context/auth";

//Cria um hook para utilização do context
const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;