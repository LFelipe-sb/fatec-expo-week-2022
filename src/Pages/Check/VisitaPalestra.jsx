import React from 'react'
import Tabela from '../../Components/Table/index.jsx';
import './style.css';

function VisitaPalestra() {
    return (
        <div>
            <h2>Bem vindo(a):</h2> <h1>{sessionStorage.getItem("userName")}</h1>
            <Tabela colum2='Código' colum3='Descrição' colum4='Quando?' colum5='Tipo'/>
        </div>
    )
}

export default VisitaPalestra