import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/menu.css';
import logo from '../images/logo.png'

export default function Menu() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img src={logo} className="img-fluid" alt="Barbearia Clube"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link id="hoverNav" className="nav-link" aria-current="page" to="/">Principal</Link>
        </li>
        <li className="nav-item">
          <Link id="hoverNav" className="nav-link" to="/equipe">Equipe</Link>
        </li>
        <li className="nav-item">
          <Link id="hoverNav" className="nav-link" to="/servicos">Serviços</Link>
        </li>
        <li className="nav-item">
          <Link id="hoverNav" className="nav-link" to="/galeria">Galeria</Link>
        </li>
        <li className="nav-item">
          <Link id="hoverNav" className="nav-link" to="/contato">Contato</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>



    );
    
}