import React from 'react';
import { Switch, Route} from 'react-router-dom'

import logo from './logo.svg';

import Nav from './navbar'
import Contdash from './dados'
import Pedidoss from './pedidos'
import Acompanhar from './Acompanhamento'

const App: React.FC = () => {
  return (
    <div style={{display: "flex"}} className="App">
      <Nav />
      <Switch>
        <Route path="/" exact={true} component={Contdash} />
        <Route path="/pedidos" component={Pedidoss} />
        <Route path="/acompanharPedido" component={Acompanhar} />
      </Switch>
    </div>
  );
}

export default App;
