import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../../Components/Form';
import Voltar from '../../../Images/voltar.png';
import '../style.css';

function CadastroVisitante(props) {
  return (
    <div className="container-cadastro">
      <Form user={0} />
      <Link className='voltar' to='/'><img src={Voltar} alt="voltar" title="voltar" /></Link>
    </div>
  );
}

export default CadastroVisitante;