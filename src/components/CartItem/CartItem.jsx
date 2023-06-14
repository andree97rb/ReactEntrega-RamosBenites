import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cart-item container">
      <h4 className="item-name">{item.nombre}</h4>
      <p className="item-quantity">Cantidad: {cantidad}</p>
      <p className="item-price">Precio: {item.precio} soles</p>
      <button className="btn btn-danger" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
      <hr className="item-divider" />
    </div>
  );
}

export default CartItem;
