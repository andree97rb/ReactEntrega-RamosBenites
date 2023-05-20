import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products }) => {
  // Obtener una lista de categorías únicas de los productos
  const categories = [...new Set(products.map(prod => prod.category))];

  return (
    <div className="container">
      {categories.map(category => (
        <div key={category} className="row">
          <div className="col">
            <h2 className="mb-4">{category}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {products
                .filter(prod => prod.category === category)
                .map(prod => (
                  <div key={prod.id} className="col mb-4">
                    <Item {...prod} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
