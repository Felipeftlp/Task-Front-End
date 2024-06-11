//Importação do componente para utilizar os Reducers
import { combineReducers } from "redux";
//Importação dos Reducers
import userReducer from "./user/reducer";
import saleReducer from "./sales/reducer";

//Criação de um Hook para acessar os reducers
const rootReducer = combineReducers({ userReducer, saleReducer });

export default rootReducer;