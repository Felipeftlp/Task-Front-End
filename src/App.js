import React from 'react';
//Importação da estilização global da aplicação
import GlobalStyle from './styles/global';
//Importação das rotas da aplicação
import RoutesApp from './routes';
//Importação do provider para aplicação
import { AuthProvider } from './context/auth';

//Criação do App
function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
