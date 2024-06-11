import React from 'react';
//Importação do Hook de navegação do react-router-dom
import { useNavigate } from 'react-router-dom';
//Importação do componente Button
import Button from '../../components/Button';
//importação da estilização da página
import * as C from "./styles";
//Importação do Hook para utilização do context
import useAuth from '../../hooks/useAuth';

//Criacão da página "LandingPage"
const LandingPage = () => {
  //Criação da variável de navegação
  const navigate = useNavigate();

  //Hook para coletar o usuário autenticado
  const { signed } = useAuth();
  //Hook para utilizar a função de logout
  const { signout } = useAuth();

  //Criação da função que chama o logout
  const handleLogout = () => {
    //Chamada do Hook para o logout
    signout();
    //Navegação para o "Login"
    navigate('/login');
  };

  //Elementos presentes na página carregada
  return (
    <C.Container>
      <C.Title>Bem vindo, {signed.name}</C.Title>
      <Button Text='Gerenciamento de vendas' onClick={() => navigate('/sales')}/>
      <Button Text='Logout' onClick={handleLogout}/>
    </C.Container>
  );
};

export default LandingPage;
