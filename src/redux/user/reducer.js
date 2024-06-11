//Importação dos tipos de ações do Reducer do usuário
import UserActionTypes from "./action-types";

//Criação do estado inicial do usuário
const initialState = {
    currentUser: null,
};

//Criação do Reducer do usuário
const userReducer = (state = initialState, action) => {
  //Verifica o tipo de ação que será realizada
  switch (action.type) {
    //Realiza o login do usuário
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    //Realiza o logout do usuário
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;