import { createContext, useEffect } from 'react';
//importação dos elementos Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../redux/user/actions';

//Criação do Context
export const AuthContext = createContext({});

//Criação de um provider para proteção de páginas privadas
export const AuthProvider = ({ children }) => {
    //criação da variável para utilização do dispatch
    const dispatch = useDispatch();

    //Consulta do estado do usuário atual
    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)

    //Criação de um "banco" com os dados do usuário
    const mockUser = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Felipe'
    };

    //Verifica se já tem um usuário logado no sistema
    useEffect(() => {
        //Coleta o token do usuário guardado no localStorage     
        const token = localStorage.getItem('token');

        //Verifica se algum token foi coletado
        if (token) {
          //Faz o login do usuário pelo dispatch do Redux
          dispatch(loginUser(mockUser));
        }
    }, [dispatch])

    //Criação da função de login
    //Recebe o email e a que o usuário digitar
    const signin = (email, password) => {
        //Verifica se o email e a senha informados pelo usuário estão corretos
        if (mockUser.email === email && mockUser.password === password) {
            //Cria um token para guardar o acesso do usuário
            const token = Math.random().toString(36).substring(2);
            //Guarda o token de acesso no localStorage
            localStorage.setItem('token', JSON.stringify({ token }));
            //Faz o login do usuário pelo dispatch do Redux
            dispatch(loginUser(mockUser));
            //Como não teve nenhum erro, retorna vazio para a chamada da função
            return;
        } else {
            //Retorna uma mensagem de erro para a chamada da função
            return "E-mail ou senha incorretos";
        }
    };

    //Criação da função de logout
    const signout = () => {
        //Faz o logout do usuário pelo dispatch do Redux
        dispatch(logoutUser())
        //Remove o token de acesso do localStorage
        localStorage.removeItem('token');
    };

    //Retorna o provider completo
    //Passando o usuário atual, o estado do usuário, e as funções criadas
    return (
        <AuthContext.Provider
            value={{ currentUser, signed: currentUser, signin, signout}}
        >
            {children}
        </AuthContext.Provider>
    );
};