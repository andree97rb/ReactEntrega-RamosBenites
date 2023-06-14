import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en el carrito</h2>
        <Link className="btn btn-primary" to="/">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div className="container pb-4">
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <div className="cart-summary">
        <h3 className="total-price">Total: {total} soles</h3>
        <h3 className="total-quantity">Cantidad total: {cantidadTotal}</h3>
      </div>
      <div className="cart-actions">
        <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
        <Link className="btn btn-primary" to="/checkout">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;
