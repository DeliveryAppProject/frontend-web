import React from 'react';
import { Switch, Route} from 'react-router-dom'

import logo from './logo.svg';
import './styles/display-grid.css'

import Nav from './navbar'
import Contdash from './dados'
import Pedidoss from './pedidos'
import Acompanhar from './Acompanhamento'
import Error from './Error404'

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav /> {/* menu estatico, ele não atualiza junto com a aplicação */}
      <Switch>
        {/* Roteamento da aplicação */}
        <Route path="/" exact={true} component={Contdash} />{/* Dados do dashboard no qual vai ser consumido pela api */}
        <Route path="/pedidos" component={Pedidoss} />{/* Pedidos no qual o restaurante vai receber toda a demanda e escolher entre aceitar e recusar o pedido */}
        <Route path="/acompanharPedido" component={Acompanhar} />{/* Aqui ele vai ter acesso ao gps do motoboy e conseguir saber aonde o pedido está caso o cliente tenha dúvidas. */}
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
