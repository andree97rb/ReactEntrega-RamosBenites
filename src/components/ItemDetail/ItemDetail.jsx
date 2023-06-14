import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, descripcion, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="container item-detail">
      <div className="row">
        <div className="col-lg-6">
          <img src={img} alt={nombre} className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <div className="item-info">
            <h2 className="item-title">{nombre}</h2>
            <h3 className="item-price">Precio: ${precio}</h3>
            <h3 className="item-id">ID: {id}</h3>
            <div className="">{descripcion}</div>
            {agregarCantidad > 0 ? (
              <Link className="btn btn-primary" to="/cart">
                Terminar Compra
              </Link>
            ) : (
              <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
