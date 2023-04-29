import Card from '../Card/Card';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$19.99',
        image: 'https://m.media-amazon.com/images/I/815K4p82zlL._SX679_.jpg',
        category: 'Electrodomésticos'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$24.99',
        image: 'https://http2.mlstatic.com/D_NQ_NP_943989-MLV47586441377_092021-O.jpg',
        category: 'Electrodomésticos'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$29.99',
        image: 'https://i.linio.com/p/c5cf803a40cca1a68556067f1a189c90-product.webp',
        category: 'Electrodomésticos'
    },
    {
        id: 4,
        name: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$29.99',
        image: 'https://i.linio.com/p/c5cf803a40cca1a68556067f1a189c90-product.webp',
        category: 'Electrodomésticos'
    },
];

const ProductList = () => {
    return (
        <div className='container container-white'>
            <div className="row">
                {products.map(product => (
                    <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
