import React, {useState} from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './style.css';

import LogoFatec from '../../Images/logo-fatec.jpg';
import LogoEtecEmbu from '../../Images/logo-etec.jpg';

function Main() {

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <>
      <div className="container-main" >
        <Link to='/cadastro-aluno' className='card'>Aluno</Link>
        <Link to='/cadastro-visitante' className='card'>Visitante</Link>
        <p 
          onClick={() => {
            setIsOpen(true);
        }}>* Créditos</p>
      </div>
      <div className='all-modal responsive-modal'>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className='style-modal'
        >
          <div>
              <h1 className='title-thanks'>Agradecimentos</h1>
              <p>Sistema desenvolvido para uso durante a Fatec Expo Week em conjunto com alunos e professores da Etec de Embu e Fatec Osasco.</p>
              
              <p>
                <b>Fábio Brussolo</b> <br />
                <i>Professor e Coordenador na Fatec Osasco. 
                <br />(Redes de Computadores).</i>
              </p>

              <p> 
                <b>Gabriel Müller</b> <br />
                <i>Aluno na Etec de Embu. 
                <br />(Desenvolvimento de Sistemas).</i>
              </p> 

              <p> 
                <b>Gustavo Augusto Wustemberg</b> <br />
                <i>Aluno na Etec de Embu. 
                <br />(Desenvolvimento de Sistemas).</i>
              </p>

              <p>
                <b>Laiza Sena</b> <br />
                <i>Aluna na Etec de Embu. 
                <br />(Desenvolvimento de Sistemas).</i>
              </p>

              <p>
                <b>Luís Felipe Santos</b> <br />
                <i>Professor na Etec de Embu. 
                <br />(Desenvolvimento de Sistemas).</i>
              </p>

              <p>
                <b>Marcos Costa</b> <br />
                <i>Professor e Coordenador na Etec de Embu e Professor nas Fatecs Osasco e São Roque. <br />(Desenvolvimento de Sistemas e Redes de Computadores).</i>
              </p>

              <p>
                <b>Stephanie Marques Fernandes</b> <br />
                <i>Auxiliar de Docente na Fatec Osasco. 
                <br />(Redes de Computadores).</i>
              </p>

              <p>
                <b>Wesley de Sousa Batista</b> <br />
                <i>Aluno na Fatec Osasco. 
                <br />(Redes de Computadores).</i>
              </p>       
          </div>
          <div className='logos-modal'>
            <img src={LogoFatec} alt="Logo da faculdade Fatec Osasco" />
            <img src={LogoEtecEmbu} alt="logo da escola Técnica Etec Embu" />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Main;
