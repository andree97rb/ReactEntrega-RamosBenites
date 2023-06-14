import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto p-3'>
      <img className='imgProducto' src={img} alt={nombre} />
      <h3 className='nombreProducto'>Nombre: {nombre} </h3>
      <p className='precioProducto'>Precio: {precio} soles </p>
      <p className='idProducto'>ID: {id} </p>
      <Link className='miBtn' to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item
