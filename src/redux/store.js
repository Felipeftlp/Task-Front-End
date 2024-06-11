//Importação do elemento para criação de uma store
//Na store os elementos são guardados
import { legacy_createStore as createStore } from 'redux';
//Importação do Hook para utilizar os reducers
import rootReducer from './root-reducer';

//Criação da store que irá guardar os dados
const store = createStore(rootReducer);

export default store;
