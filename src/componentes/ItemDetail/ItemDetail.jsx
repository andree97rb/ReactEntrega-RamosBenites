import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({ id, name, price, img, description }) => {
  return (
    <div className='contenedorItem container mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='imagen'>
            <img src={img} alt={name} className='img-fluid imagenProducto' height={800}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='contenido'>
            <div className='detalleTexto'>
              <h2>Nombre: {name}</h2>
              <h3>Precio: {price}</h3>
              <h3>ID: {id}</h3>
              <p>{description}</p>
              <button className='btn btn-primary'>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
