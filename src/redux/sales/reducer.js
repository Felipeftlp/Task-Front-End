//Importação dos tipos de ações do Reducer das vendas
import salesActionTypes from "./action-types";

//Criação do estado inicial das vendas
const initialState = {
    sales: [],
};

//Criação do Reducer de vendas
const saleReducer = (state = initialState, action) => {  
  //Verifica o tipo de ação que será realizada
  switch (action.type) {
    //Adiciona uma venda
    case salesActionTypes.ADD_SALE:
      return {
        ...initialState,
        sales: [...state.sales, action.payload]
      };
    //edita uma venda
    case salesActionTypes.EDIT_SALE:
      return {
        ...state,
        sales: state.sales.map(sale => 
          sale.id === action.payload.id ? action.payload : sale
        )
      };
    //Apaga uma venda 
    case salesActionTypes.DELETE_SALE:
      return {
        ...state,
        sales: state.sales.filter(sale => sale.id !== action.payload)
      };         
    default:
      return state;
  }
};

export default saleReducer;