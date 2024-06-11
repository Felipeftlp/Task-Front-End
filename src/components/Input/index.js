import React from 'react';
//importação da estilização do componente Input
import * as C from './styles'

//Criação do componente Input
const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <C.Input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
