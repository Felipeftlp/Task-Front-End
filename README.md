# Task Front-End

Este projeto utiliza o [Create React App](https://github.com/facebook/create-react-app) e uma API em NodeJS que não demanda nenhum banco de dados.

## Instalação

Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório:
```sh
  $ git clone https://github.com/maateusilva/youtube-context-api.git
```

Depois disso, instale as dependências da aplicação:
```sh
  $ npm install redux react-redux react-router-dom styled-components
ou
  $ npm i
```

## Executando a aplicação

Utilize o seguinte comando para executar a aplicação:
```sh
  $ npm start
```

As credenciais para login são:
```sh
  Email: 'test@example.com'
  Senha: 'password123'
```

# Descrição das escolhas tecnológicas e arquitetônicas

Na aplicação foram utilizadas:

- Context API, para não ser necessária a utilização de Hooks, que verificariam a existência de um usuário autenticado e executariam a função de fornecer esse usuário, em todas as páginas. Como também, isso facilita a autenticação que só precisa ser executada uma vez, já que o "Context" envolve toda a aplicação;
- Biblioteca "Redux", uma indicação da task, para o gerenciamento de estados globais na aplicação, tanto do usuário, em parceria com a "Context", quanto das vendas;
- Biblioteca "Styled Components", para a estilização, por uma questão de conforto, já que é uma biblioteca que estou aprendendo recentemente, e sua semelhança com CSS me ajudou muito;
- Biblioteca "React Router Dom", para a paginação, por ser a melhor para paginação, na minha opnião, e ser a que tenho familiaridade.

Dessa forma, deixei o código limpo e bem estruturado.
