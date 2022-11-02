import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import api from '../../Service/api'

import './style.css';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();  
    
        try {
        const dataLogin = {
            user,
            password
        }
    
        const { data } = await api.post('/login', dataLogin);

        toast.success('Login efetuado com sucesso', {
            position: "top-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        const { eventId } = jwt_decode(data.token)
    
        sessionStorage.setItem("login", true);
        sessionStorage.setItem("jwt", data.token);
        sessionStorage.setItem("eventId", eventId);
        
        setTimeout(() => {
            navigate("/checkout");
            window.location.reload(true)
        }, 2500);
    
        } catch(err) {
            if(err.response.status === 401) {
                toast.error(`Usuário ou senha informado é invalido`, {
                    position: "top-center",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
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
    }
    
    return (
        <div className='container-login'>
            <form className='form-login'>
                <input 
                    className='input-login' 
                    type='text' 
                    placeholder='Usuário:' 
                    required 
                    onChange={(e) => {setUser(e.target.value)}}    
                />
                <input 
                    className='input-login' 
                    type='password' 
                    placeholder='Senha:' 
                    required 
                    onChange={(e) => {setPassword(e.target.value)}}        
                />
            </form>

                <button className='buttons-login' onClick={handleLogin}>Entrar</button>
                <Link to='/'><button className='buttons-login'>Cancelar</button></Link>
        </div>
    )
}

export default Login