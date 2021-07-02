import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';



const Receta = ({receta}) => {

  // extrear los valores del context
  const { setIdReceta } = useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img 
          className="card-img-top"
          src={receta.strDrinkThumb} 
          alt={receta.strDrink}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => {
              setIdReceta(receta.idDrink)
            }}
          >
            Ver receta 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;