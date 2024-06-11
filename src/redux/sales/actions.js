//Importação dos tipos de ações do Reducer das vendas
import salesActionTypes from "./action-types";

//criação da ação de adicionar venda
export const addSale = (sale) => ({
    type: salesActionTypes.ADD_SALE,
    payload: sale,
  });

//criação da ação de editar venda
export const editSale = (sale) => ({
  type: salesActionTypes.EDIT_SALE,
  payload: sale,
});

//criação da ação de excluir venda
export const deleteSale = (id) => ({
  type: salesActionTypes.DELETE_SALE,
  payload: id,
});