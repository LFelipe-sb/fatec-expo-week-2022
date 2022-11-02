import React from 'react'
import Tabela from '../../Components/Table/index.jsx';

function Checkout() {
    return (
        <div>
            <Tabela check={1} colum2='Nome' colum3='E-mail' />
        </div>
    )
}

export default Checkout