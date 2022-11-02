import './style.css';
import api from '../../Service/api'
import { useState } from 'react';
import { IMaskInput } from "react-imask";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import Terms from '../Terms/index.jsx';
import validator from "validator";
import { cpf as validateCpf } from 'cpf-cnpj-validator'; 

function Form(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);
  const [ra, setRa] = useState(null);
  const [curso, setCurso] = useState(null);
  const [semestre, setSemestre] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [btnName, setBtnName] = useState('Cadastrar');
  const [isDisabled, setIsDisabled] = useState(false);
  const [terms, setTerms] = useState(false);
  const [loadModal, setLoadModal] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const navigate = useNavigate();

  async function createUser(event) {
    event.preventDefault();

    const isCpf = validateCpf.isValid(cpf);
    const isEmail = email !== null ? validator.isEmail(email) : '';

    if(!isCpf && props.user == 0) {
      return toast.warning(`O CPF informado não é valido`, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if(!isEmail) {
      return toast.warning(`O email informado não é valido`, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
    try {
      const data = {
        name, email, ra, cpf, curso, semestre, tel, aceitaTermo: terms,
      }

      if(!name) {
        return getStudentInfo();
      }

      if(btnName === 'Acessar') {
        setTerms(true);
        navigate("/visita-palestra");
      } else {

        if(props.user == 1 && !ra && !email && !curso && !semestre) {
          toast.warning('Preencha seu RA e email!', {
            position: "top-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return;
        }

        if(props.user == 0 && !cpf || !email || !name || !tel) {
          toast.warning('Por favor, preencha todos os campos!', {
            position: "top-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return;
        };

        if(!terms && props.user == 0) {
          toast.warning('É preciso aceitar os termos para avançar!', {
            position: "top-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        return;
        }
        
        await api.post('/user', data);

        toast.success(`Usuário ${name} cadastrado com sucesso!`, {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  
        setCpf('');
        setName('');
        setTel('');
        setEmail('');
      }
    }
    catch (err) {
      toast.error(`Houve um erro: ${err}`, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  async function getVisitorInfo() {
    if(!cpf.length) return;

    const isCpf = validateCpf.isValid(cpf);

    if(!isCpf) {
      setName('');
      setTel('');
      setEmail('');
      setBtnName('Cadastrar');
      setIsDisabled(false);
      return toast.warning(`O CPF informado não é valido`, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const { data } = await api.get(`/user/${cpf}`);
    if(data) {
      setName(data[0].nome);
      setTel(data[0].telefone);
      setEmail(data[0].email);
      setBtnName('Acessar');
      setIsDisabled(true);
      sessionStorage.setItem("userId", data[0].id_pessoa);
      sessionStorage.setItem("userName", data[0].nome);
      setSpinner(true);
      setTimeout(() => {
        setTerms(true);
        navigate("/visita-palestra");
      }, 3000);
    } else {
      setName('');
      setTel('');
      setEmail('');
      setBtnName('Cadastrar');
      setIsDisabled(false);
    }
  }

  async function getStudentInfo() {
    if(!ra || !email) return;

    const { data } = await api.get(`/student/${ra}/${email}`);
    if(data) {
      setName(data[0].nome);
      setTel(data[0].telefone);
      setEmail(data[0].email);
      setCurso(data[0].descricao);
      setSemestre(data[0].semestre);
      setBtnName('Acessar');
      setIsDisabled(true);
      sessionStorage.setItem("userId", data[0].id_pessoa);
      sessionStorage.setItem("userName", data[0].nome);
      setSpinner(true);
      setTimeout(() => {
        setTerms(true);
        navigate("/visita-palestra");
      }, 3000);
    } else {
      setName('');
      setTel('');
      setCurso('');
      setSemestre('');
      setBtnName('Cadastrar');
      setIsDisabled(false);

      return toast.warning(`Dados informados não encontrados`, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  
  function handleChange(e) {
    const {checked} = e.target;
    setTerms(checked);
  }

  function showModal(){
    setLoadModal(true);
  }

  return (
    <div className="container-form">
      {spinner && <PulseLoader color="#354a46" margin={8}/>}
      <form>
        
        {props.user == 1 ?
          <IMaskInput
            mask="0000000000000"
            placeholder="RA: "
            value={ra} onChange={e => setRa(e.target.value)}
            required
            onBlur={getStudentInfo}
          /> :
          <IMaskInput
          mask="000.000.000-00"
          placeholder="CPF: "
          value={cpf} onChange={e => setCpf(e.target.value)}
          required
          onBlur={getVisitorInfo}
        />}
        <input type="email" placeholder={props.user == 1 ? 'Email Institucional:' : 'Email:'} value={email} onChange={e => setEmail(e.target.value)} required onBlur={getStudentInfo} disabled={props.user !== 1 ? isDisabled : false}/>
        <input type="text" placeholder='Nome: ' value={name} onChange={e => setName(e.target.value)} required disabled={props.user == 1 ? true : isDisabled} />
        {props.user == 1 ? <>
          <input type="text" placeholder='Curso: ' value={curso} onChange={e => setCurso(e.target.value)} required disabled={true}/>
          <input type="text" placeholder='Semestre: ' value={semestre} onChange={e => setSemestre(e.target.value)} required disabled={true}/> </> : <></>
        }
        {props.user !== 1 ?
          <IMaskInput
            mask="(00) 00000-0000"
            placeholder="Telefone:"
            value={tel} onChange={e => setTel(e.target.value)}
            required
            disabled={isDisabled}
          /> : <></>
        }

        {props.user == 0 && btnName == 'Cadastrar' ?
          <div className='use-term'>
            <div className='accept-terms'>
              <label>
                <input 
                  type='checkbox' 
                  className='checkbox-table' 
                  name='use-terms'
                  onChange={handleChange}
                /> Aceitar os termos
              </label>              
            </div> 
            {loadModal && <Terms isOpen={loadModal} />}
            <span onClick={() => showModal()}>Visualizar termos de uso e privacidade</span>
          </div>: <></>
          } 

        <div className="container-button">
          <button onClick={createUser}>{props.user == 1 ? 'Acessar' : btnName}</button>
          <Link to='/'><button>Cancelar</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Form;