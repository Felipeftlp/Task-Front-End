import React, { useState } from 'react';
//importação dos elementos Redux
import { useSelector, useDispatch } from 'react-redux';
import { addSale, deleteSale, editSale } from '../../redux/sales/actions';
//Importação dos componentes criados
import Button from '../../components/Button';
import Input from '../../components/Input';
//importação da estilizacão da página
import * as C from './styles';

//Criação da página "SalesManagement"
const SalesManagement = () => {
  //criação da variável para utilização do dispatch
  const dispatch = useDispatch();
  
  //Criação das variáveis
  const [form, setForm] = useState({ id: null, name: '', product: '', value: '' });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');

  //Consulta do estado das vendas
  const { sales } = useSelector((rootReducer) => rootReducer.saleReducer);

  //Criação da função de adicionar venda
  const handleAddSale = () => {
    //Verifica se todos os campos foram preenchidos
    if (!form.name || !form.product || !form.value) {
      setError("Preencha todos os campos!");
    } else {
      //adiciona uma venda pelo dispatch do Redux
      dispatch(addSale({ ...form, id: Math.floor(Math.random() * 100000)}));
      //Limpa os elementos do formulário
      setForm({ id: null, name: '', product: '', value: '' });
      //Emite uma mensagem de confimação da ação
      alert("Venda adicionada com sucesso!");
    }
  };

  //Criação da função para iniciar a edição de uma venda
  const handleEditSale = (sale) => {
    //preenche os campos do formulário com a venda que será editada
    setForm(sale);
    //altera o estado da variável "editing" para verdadeiro
    setEditing(true);
  };

  //Criação da função de editar venda
  const handleUpdateSale = () => {
    //Verifica se todos os campos foram preenchidos
    if (!form.name || !form.product || !form.value) {
      setError("Preencha todos os campos!");
    } else {
      //edita uma venda pelo dispatch do Redux
      dispatch(editSale(form));
      //Limpa os elementos do formulário
      setForm({ id: null, name: '', product: '', value: '' });
      //altera o estado da variável "editing" para verdadeiro
      setEditing(false);
      //Emite uma mensagem de confimação da ação
      alert("Venda atualizada com sucesso!");
    }
  };

  //Criação da função de excluir venda
  const handleDeleteSale = (id) => {
    //apaga uma venda pelo dispatch do Redux
    dispatch(deleteSale(id));
    //Emite uma mensagem de confimação da ação
    alert("Venda apagada com sucesso!");
  };

  //Elementos presentes na página carregada
  return (
    <C.Container>
      <C.Title>Gerenciamento de vendas</C.Title>
      <C.Content>
        <Input 
          type="text"
          placeholder="Nome do cliente"
          value={form.name}
          onChange={(e) => [setForm({...form, name: e.target.value}), setError("")]}
        />
        <Input 
          type="text"
          placeholder="Produto"
          value={form.product}
          onChange={(e) => [setForm({...form, product: e.target.value}), setError("")]}
        />
        <Input
          type="number"
          placeholder="Valor"
          value={form.value}
          onChange={(e) => [setForm({...form, value: e.target.value}), setError("")]}
        />
        <Button Text={editing ? 'Atualizar venda' : 'Adicionar venda'} onClick={editing ? handleUpdateSale : handleAddSale} />
      </C.Content>
      <C.LabelError>{error}</C.LabelError>
      <C.Content>
        <C.table>
          <C.thead>
            <C.tr>
              <C.th>ID</C.th>
              <C.th>Nome do cliente</C.th>
              <C.th>Produto</C.th>
              <C.th value>Valor</C.th>
              <C.th>Ações</C.th>
            </C.tr>
          </C.thead>
          <C.tbody>
            {sales.map((sale) => (
              <C.tr key={sale.id}>
                <C.td>{sale.id}</C.td>
                <C.td>{sale.name}</C.td>
                <C.td>{sale.product}</C.td>
                <C.td>{sale.value}</C.td>
                <C.td button>
                  <C.tableButton edit Text='Editar' onClick={() => handleEditSale(sale)} />
                  <C.tableButton delete Text='Apagar' onClick={() => handleDeleteSale(sale.id)} />
                </C.td>
              </C.tr>
            ))}
          </C.tbody>
        </C.table>
      </C.Content>
    </C.Container>
  );
};

export default SalesManagement;
