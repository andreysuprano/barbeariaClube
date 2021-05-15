import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Equipe from './pages/Equipe';
import Servicos from './pages/Servicos';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
             <Route path="/" exact component={Principal} />
             <Route path="/equipe" component={Equipe} />
             <Route path="/servicos" component={Servicos} />
             <Route path="/galeria" component={Galeria} />
             <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;