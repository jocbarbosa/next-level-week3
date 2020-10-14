import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import mapMarker from '../images/marker.svg';

import '../styles/pages/orphanage-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Fortaleza</strong>
                    <span>Ceará</span>
                </footer>
            </aside>

            <div></div>

            <Link className="create-orphanage" to="#">
                <FaPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;