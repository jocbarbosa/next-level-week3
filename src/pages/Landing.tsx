import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças</p>
                </main>

                <div className="location">
                    <strong>Ceará</strong>
                    <span>Fortaleza</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FaSignInAlt size={20} color="#4f4f4f" />
                </Link>
            </div>

        </div>
    );
}


export default Landing;