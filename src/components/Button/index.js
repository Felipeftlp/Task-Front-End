import React from 'react';
//importação da estilização do componente Button
import * as C from './styles';

//Criação do componente Button
const Button = ({ Text, onClick, Type = "button", className }) => {
    return (
        <C.Button className={className} type={Type} onClick={onClick}>
            {Text}
        </C.Button>
    );
}

export default Button;
