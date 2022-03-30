import React from "react";
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import logoRaposa from '../../assets/6736629.jpg';
import './styles.css';

export default function NewAnimals() {
    return (
        <div className="new-animal-container">
            <div className="content">
                <section>
                    <img src={logoRaposa} width={300} alt="logo raposa"/>
                
                    <h1>Cadastrar novo Animal</h1>
                    <p>
                        Cadastre aqui seu pet para uma procurar o dono ideal
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color = "#E02041"/>
                        Voltar ao início
                    </Link>

                </section>

                <form>
                    <input placeholder="Nome do Animal"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Idade do animal"/>
                

                    <button className="button" type="submit"> Cadastrar</button>
                </form>

            </div>
        </div>
    );
}