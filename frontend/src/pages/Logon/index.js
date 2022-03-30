import React from "react";
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';


import './styles.css';

import passeioCachorro from '../../assets/10668.jpg';
import logoRaposa from '../../assets/6736629.jpg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoRaposa} width={350} alt="Adota Aqui"/>

                <form>
                    <h1> Faça seu Login</h1>
                    <h1> e Adote aqui</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color = "#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={passeioCachorro} width={1124} alt="Cachorro"/>

        </div>
    )
}