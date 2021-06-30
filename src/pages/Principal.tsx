import React from 'react';
import '../styles/pages/principal.css';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import bannerG from "../images/bannerBrowser-1800x768.png";
import bannerM from "../images/bannerPad-1080x1080.png"
import bannerP from "../images/bannerMobile-1080x1920.png";
import fundo from "../images/fundoBanner2.svg";


function Principal() {
    return (
     
        <div id="page-principal">
            <Menu />
            <img src={bannerG} className="card-img bannerG" alt="Barbearia Clube"/>
            <img src={bannerM} className="card-img bannerM" alt="Barbearia Clube"/>
            <img src={bannerP} className="card-img bannerP" alt="Barbearia Clube"/>
            <img src={fundo} className="card-img fundo" alt="Barbearia Clube"/>

           
{/*          
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img src={fotocasa02} className="d-block w-100" alt="..."/>
     
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={fotoEquipe} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={fotocasa02} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
         
        <Footer />
        </div>
        
    
    );
}

export default Principal;