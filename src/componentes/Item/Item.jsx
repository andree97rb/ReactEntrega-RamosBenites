import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, price, img, category }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top product-image d-flex justify-content-center" alt={name}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{name}</h5>
                </div>
                <div>
                    <p className="card-text mb-0">Precio: {price}</p>
                    <p className="card-text mb-0">Category: {category}</p>
                    <Link to = {`/item/${id}`}  className="btn btn-primary mt-3">Detalles  </Link>
                </div>
            </div>
        </div>
    );
}

export default Item