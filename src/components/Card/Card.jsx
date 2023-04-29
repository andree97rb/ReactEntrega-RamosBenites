import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top product-image" alt={product.name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <div>
          <p className="card-text mb-0">Price: {product.price}</p>
          <p className="card-text mb-0">Category: {product.category}</p>
          <a href="./" className="btn btn-primary mt-3">Llevame  </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
