import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from "../../services/api";

import './styles.css'
import logoRaposa from '../../assets/6736629.jpg';

export default function Register() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[adress, setAdress] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            adress
        };

        const response = await api.post('users', data)

        alert(`Seu iD: ${response.data.id}`);
    }
 
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoRaposa} width={300} alt="logo raposa"/>
                
                    <h1>Cadastre-se e adote agora!</h1>
                    <p>
                        Faça seu cadastro e entre na plataforma para adotar animais disponíveis em sua região!
                    </p>

                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color = "#E02041"/>
                        Não tenho cadastro
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome Completo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input 
                    type = "email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    
                    />
                    <input 
                    placeholder="Numero para contato"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Endereço"
                        value={adress}
                        onChange={e => setAdress(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit"> Cadastrar</button>
                </form>

            </div>
        </div>
    );
}