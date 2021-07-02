import React from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

// import CategoriasProvider from './context/CategoriasContext';
// import {CategoriasContext} from './context/CategoriasContext';

const App = () =>  {
// const {saludo} = useContext(CategoriasContext);
// console.log(saludo);
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
        <ListaRecetas />
      </div>
    </div>
  );
}

export default App;
