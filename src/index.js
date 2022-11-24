import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout';
import logo from './logo.svg';
import './index.css'

// faccio finta che l'svg sia un componente. Perchè? perchè l'svg è formato a tutti gli effetti da vari tag
import { ReactComponent as LogoReact } from './logo.svg'


import ListaImpegni from './components/ListaImpegni/ListaImpegni'
// import Todo from './components/Todo/Todo'
import TodoRipasso from './components/TodoRipasso/TodoRipasso'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Layout /> */}
    {/* <Layout></Layout> */}


    {/* primo metodo per importare svg, ovvero come se lo lo fosse xD */}
    {/* <img src={logo} /> */}

    {/* usando il suo "tag" */}
    {/* <LogoReact /> */}




    {/* esercizio */}
    {/* <ListaImpegni /> */}

    {/* <Todo /> */}
    <TodoRipasso />
  </React.StrictMode>
);