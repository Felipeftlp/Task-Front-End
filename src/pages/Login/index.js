import React, { useState } from 'react';
//Importação do Hook de navegação do react-router-dom
import { useNavigate } from 'react-router-dom';
//Importação dos componentes criados
import Button from '../../components/Button';
import Input from '../../components/Input';
//importação da estilizacão da página
import * as C from './styles';
//Importação do Hook para utilização do context
import useAuth from '../../hooks/useAuth';
  
//Criação da página "Login"
const Login = () => {
  //Hook para utilizar a função de login
  const { signin } = useAuth();

  //Criação da variável de navegação
  const navigate = useNavigate();

  //Criação das variáveis
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  //Criação da função que chama o logout
  const handleLogin = () => {
    //verifica se os campos de email e senha estão preenchidos
    if (!email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    //Chamada do Hook para o login
    const res = signin(email, password);

    //Verifica se no retorno da função "signin" teve algum erro
    if (res) {
      setError(res);
      return;
    }

    //Navegação para a "LandingPage"
    navigate('/');
  };

  //Elementos presentes na página carregada
  return (
    <C.Container>
      <C.Label>Sistema de Login</C.Label>
      <C.Content>
        <Input 
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Entrar" onClick={handleLogin} />
      </C.Content>
    </C.Container>
  );
};

export default Login;
