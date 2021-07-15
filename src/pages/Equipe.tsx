import React from 'react';

import Menu from "../components/Menu";

import '../styles/pages/equipe.css';



//imagens
import perfilWag from '../images/wagperfil.jpeg';
import adrianoperfil from '../images/adrianoperfil.jpeg';
import leoperfil from '../images/leoperfil.jpeg';
import pedroperfil from '../images/pedroperfil.jpeg';
import jorgeperfil from '../images/jorgeperfil.jpeg';
import fernandoperfil from '../images/fernandoperfil.jpeg';
import walperfil from '../images/walperfil.jpeg';
import guiperfil from '../images/guiperfil.jpeg';
import gustavoperfil from '../images/gustavoperfil.jpeg';
import estetica1 from '../images/estetica1.jpeg';
import estetica2 from '../images/estetica2.jpeg';
import wilmaperfil from '../images/wilmaperfil.jpeg';
import pianovo from '../images/pianovoperfil.jpeg';
import maiconperfil from '../images/maiconperfil.jpeg';
import adaoperfil from '../images/adaoperfil.jpeg';

import logo from '../images/logo.png';

import Footer from "../components/Footer";

{/* <div className="col-md-4"> */}

function Equipe() {
    return (
        <div id="page-equipe">
            <Menu />
     
        <main>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={perfilWag} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Wagner</strong></h5>
        <p className="card-text"><small>18 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
 
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={leoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Léo</strong></h5>
        <p className="card-text"><small>14 anos de experiência</small></p>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={adrianoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Adriano</strong></h5>
        <p className="card-text"><small>34 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={pedroperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Pedro</strong></h5>
        <p className="card-text"><small>6 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={fernandoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Fernando</strong></h5>
        <p className="card-text"><small>16 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={guiperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Guilherme</strong></h5>
        <p className="card-text"><small>7 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={walperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Waldemar</strong></h5>
        <p className="card-text"><small>20 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={gustavoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Gustavo</strong></h5>
        <p className="card-text"><small>7 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={jorgeperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Jorge</strong></h5>
        <p className="card-text"><small>5 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={maiconperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Maicon</strong></h5>
        <p className="card-text"><small>8 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-user-tie">R</i></div>
    <img src={pianovo} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Juliano</strong></h5>
        <p className="card-text"><small>3 anos de casa</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-hot-tub">E</i></div>
    <img src={estetica1} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Liliane</strong></h5>
        <p className="card-text"><small>Esteticista - 5 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-hot-tub">E</i></div>
    <img src={estetica2} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Patrícia</strong></h5>
        <p className="card-text"><small>Podologa - 3 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-hot-tub">E</i></div>
    <img src={wilmaperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Wilma</strong></h5>
        <p className="card-text"><small>Massoterapeuta - 3 anos de experiência</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut">B</i></div>
    <img src={adaoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title"><strong>Adão</strong></h5>
        <p className="card-text"><small>34 anos de experiência</small></p>
      </div>
    </div>
  </div>
</div>
        </main>


        <Footer />
        </div>
       
    );
}

export default Equipe;