import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {idCategory} = useParams();

    useEffect(() => {

        const functionProducts = idCategory ? getProductsByCategory : getProducts;

        functionProducts(idCategory)
            .then(res => setProducts(res))
            .catch(error => console.error(error))

    }, [idCategory])

    return (
        <div>
            <h2 className='bg-success d-flex justify-content-center mt-5 mb-5 pt-3 pb-3 text-light'><strong>Productos</strong></h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer