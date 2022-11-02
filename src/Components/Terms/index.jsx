import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

import './style.css';

function Index({ isOpen }) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='all-modal'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='container-modal'
            >
                <h3 className='font-terms first-title'>Termos de uso e privacidade</h3>
                <p className='font-terms'>
                    <h4 className='title-terms'>Termo de uso</h4>
                    Este é um termo de uso estabelecido a você, designado como usuário. O presente termo trata-se da utilidade do sistema web disponibilizado gratuitamente, seja para dispositivos móveis ou computadores pessoais.
                    Leia cuidadosamente em razão de que o uso deste site significa que foi analisado e aceitado todos os termos.
                </p>
                <p className='font-terms'>
                    <h4 className='title-terms'>Coleta e uso de dados</h4>
                    O usuário se compromete em informar com veracidade os dados fornecidos. Ao aceitar os termos, o usuário assente a plataforma a coletar, armazenar e/ou utilizar informações, incluindo todos os dados já fornecidos pelo mesmo ao realizar o cadastro.
                </p>
                <p className='font-terms'>
                    <h4 className='title-terms'>Licença</h4>
                    Este temo de uso não cede ao usuário qualquer direito de propriedade, apenas para acesso e uso dos serviços disponibilizados.
                </p>
                <p className='font-terms'>
                    <h4 className='title-terms'>Responsabilidade</h4>
                    É responsabilidade do usuário: <br />
                    I) Fornecer dados atualizados, tais como cpf e e-mail; <br />
                    II) Autenticidade nos dados fornecidos ao realizar cadastro;
                </p>
                <button className='btn-modal' onClick={(closeModal)}>Ok</button>
            </Modal>
        </div>
    )
}

export default Index