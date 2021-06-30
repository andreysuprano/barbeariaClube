import React from 'react';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import '../styles/pages/contato.css';
import mapPic from '../images/maplocation.svg';
// import { MapContainer } from 'react-leaflet';
// import { TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';




function Contato() {
    return (
     
        <div id="page-contato">
            <Menu />
        
        {/* <div className="map"> */}
        <img src={mapPic} className="mapPhoto" alt="Barbearia Clube Localização"/>
        {/* <MapContainer
            center={[-25.4258438,-49.3015041]}
            zoom={15}
            style={{ widht:'100%', height:'100%' }}
            >
                <TileLayer  
                 url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                
                 />
        </MapContainer> */}
        {/* </div> */}
        <main>
         <h1>Barbearia Clube Barigui</h1>
         <h2>Mercês</h2>
         <p>Rua Jacarezinho, 21 com Cândido Hartmann</p>
         <small>(41) 3014-9413</small>
        </main>
       
        <Footer />
      </div>
    );
}

export default Contato;