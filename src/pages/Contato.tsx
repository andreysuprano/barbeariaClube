import React from 'react';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import '../styles/pages/contato.css';
import mapPic from '../images/maplocation.svg';
import { MapContainer } from 'react-leaflet';
 import { TileLayer } from 'react-leaflet';
 import 'leaflet/dist/leaflet.css';
 import {
    BrowserView,
    MobileView,
  } from "react-device-detect";




function Contato() {
    return (
        <>
     <BrowserView >
        <div id="page-contato">
            <Menu />
            <main className="main-browser">
       
         <h1>Barbearia Clube Barigui - Mercês </h1>
      
         <p>Rua Jacarezinho, 21 com Cândido Hartmann</p>
         <div className="rowitems">
         <ul>
             <li>2ª-  das 13h às 19h</li>
             <li>3ª a 6ª- das 9h as 19h</li>
             <li>Sáb- das 9h as 17h</li>
         </ul>
         <small>(41) 3014-9413</small>
         </div>
        </main>
        {/* <div className="map"> */}
        <img src={mapPic} className="mapPhoto" alt="Barbearia Clube Localização"/>
        {/* <MapContainer
            center={[-25.4258438,-49.3015041]}
            zoom={15}
            style={{ width:'100%', height:'100%' }}
            >
                <TileLayer  
                 url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                
                 />
        </MapContainer> */}
        {/* </div> */}
     
       
        <Footer />
      </div>
      </BrowserView>
      <MobileView>
      <div id="page-contato">
            <Menu />
            <main className="main-mobile">
       
         <h1>Barbearia Clube Barigui - Mercês </h1>
      
         <p>Rua Jacarezinho, 21 com Cândido Hartmann</p>
         <div className="rowitems">
         <ul>
             <li>2ª-  das 13h às 19h</li>
             <li>3ª a 6ª- das 9h as 19h</li>
             <li>Sáb- das 9h as 17h</li>
         </ul>
         <small>(41) 3014-9413</small>
         </div>
        </main>
        {/* <div className="map"> */}
        <img src={mapPic} className="mapPhoto-mobile" alt="Barbearia Clube Localização"/>
        {/* <MapContainer
            center={[-25.4258438,-49.3015041]}
            zoom={15}
            style={{ width:'100%', height:'100%' }}
            >
                <TileLayer  
                 url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                
                 />
        </MapContainer> */}
        {/* </div> */}
     
       
        <Footer />
      </div>
    </MobileView>
    </>
    );
}

export default Contato;