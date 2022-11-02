import './style.css';
import LogoFatec from '../../Images/logo-fatec.jpg';
import LogoEtecEmbu from '../../Images/logo-etec.jpg';
import { Link } from 'react-router-dom';

function Nav() {

  function handleLogout() {
    sessionStorage.clear();
    window.location.reload(true);
  }

  return (
    <div className="container-nav">
      <Link to='/login'>
        <p className='login' onClick={sessionStorage.getItem("login") ? handleLogout : ''}>{sessionStorage.getItem("login") ? 'Sair' : 'Area Restrita'}</p>
      </Link>
      <Link className='fatec' to='/'>
        <img className='fatec-img' src={LogoFatec} alt="Logo da Fatec" title="Logo da Fatec" />
      </Link>
      <div className='apoio'> 
        APOIO:
        <img className='etec-embu' src={LogoEtecEmbu} alt="Logo do Centro Paula Souza" title="Logo do Centro Paula Souza" />
      </div>
    </div>
  );
}

export default Nav;