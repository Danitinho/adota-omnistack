import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoRaposa from '../../assets/6736629.jpg';

import './styles.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoRaposa} width="200" alt="Raposinha"/>
                <span>Bem vindo</span>
                
                <Link className="button" to = "/animals/new"> Cadastrar novo animal </Link>
                <button type="button">
                    <FiPower size={18} color = "#E02041"/>
                </button>
            </header>

            <h1>Animais Cadastrados</h1>

            <ul>
                <li>
                    <strong>ANIMAL:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>IDADE:</strong>
                    <p>5 anos</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>ANIMAL:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>IDADE:</strong>
                    <p>5 anos</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>ANIMAL:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>IDADE:</strong>
                    <p>5 anos</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>ANIMAL:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>IDADE:</strong>
                    <p>5 anos</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>ANIMAL:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>IDADE:</strong>
                    <p>5 anos</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}