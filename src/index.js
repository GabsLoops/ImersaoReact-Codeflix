import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

const Page404 = () => { return <div>Pagina 404</div> }

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>  
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

