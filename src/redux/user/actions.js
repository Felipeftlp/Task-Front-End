//Importação dos tipos de ações do Reducer do usuário
import UserActionTypes from "./action-types";

//Criação da ação de login
export const loginUser = (user) => ({
  type: UserActionTypes.LOGIN,
  payload: user,
});

//criação da ação de logout
export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});