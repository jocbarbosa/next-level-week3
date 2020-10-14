import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

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

            <Map
                center={[-3.7899266, -38.5889877]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link className="create-orphanage" to="">
                <FaPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;