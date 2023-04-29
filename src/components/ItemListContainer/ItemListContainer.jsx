import './ItemListContainer.css';
import '../../App.css'

const ItemListContainer = (props) => {
  return (
    <div className='container container-white'>
      <h2 className='titulo'>{props.greeting}</h2>
      <p className='texto'>¡Aquí encontrarás los mejores productos para ti!</p>
    </div>
  );
}

export default ItemListContainer;
