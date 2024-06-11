//Importação do elemento "Fragment" para ligar e agrupar as rotas
import { Fragment } from 'react';
//Importação dos elementos para a paginação da aplicação
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Importação do Hook para utilização do context
import useAuth from '../hooks/useAuth';
//Importação das paginas da aplicação
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import SalesManagement from '../pages/SalesManagement';

//Criação do elemento "Private"
//Garante que determinadas paginas só poderão ser acessadas caso exista um usuário logado e autenticado
const Private = ({ Item }) => {
  //Hook para coletar o usuário autenticado
  const { signed } = useAuth();

  //Verifica se existe um usuário logado
  //Caso exista, redireciona para a página desejada
  //Caso não exista, redireciona para o Login
  return signed ? <Item /> : <Login />;
}

//Criação das rotas da aplicação
const RoutesApp = () => {
    return (
        <Router>
          <Fragment>
            <Routes>
              <Route exact path='/' element={<Private Item={LandingPage} />} />
              <Route path='/sales' element={<Private Item={SalesManagement} />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Fragment>
        </Router>
    );
}

export default RoutesApp;