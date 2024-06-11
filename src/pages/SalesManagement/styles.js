//Estilização da Página de gerenciamento de vendas
import styled from "styled-components";
//Importão do componente "Button" para estilização nessa página
import Button from "../../components/Button";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    padding: 20px;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`;

export const Title = styled.h2`
`;

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const thead = styled.thead`
`;

export const tbody = styled.tbody`
`;

export const tr = styled.tr`
`;

//Utilização de props para estilizar elementos específicos
export const th = styled.th`
    background-color: white;
    padding: 10px;
    padding-right: 50px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    width: ${props => props.value ? '400px' : ''};
`;

export const td = styled.td`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    display: ${props => props.button ? 'flex' : ''};
    flex-direction: ${props => props.button ? 'row' : ''};
    align-items: ${props => props.button ? 'left' : ''};
    justify-content: ${props => props.button ? 'left' : ''};
    gap: ${props => props.button ? '15px' : '0'};
`;

export const tableButton = styled(Button)`
    background-color: ${props => props.edit ? 'green' : 'red'};
    width: 30%;

    &:hover {
        background-color: ${props => props.edit ? '#13650F' : '#A40606'};
    }
`;