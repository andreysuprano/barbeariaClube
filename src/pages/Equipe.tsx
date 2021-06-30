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
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={perfilWag} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
 
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={leoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={adrianoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={pedroperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={fernandoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={guiperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={walperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={gustavoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={jorgeperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={maiconperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-user-tie"></i></div>
    <img src={pianovo} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-hot-tub"></i></div>
    <img src={estetica1} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-hot-tub"></i></div>
    <img src={estetica2} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-hot-tub"></i></div>
    <img src={wilmaperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="ball"><i className="fas fa-cut"></i></div>
    <img src={adaoperfil} className="card-img" alt="Barbearia Clube"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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