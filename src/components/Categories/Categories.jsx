import './Categories.css';

const CategoryList = ({ categories, onCategorySelect }) => {
    return (
        <div className='category-container'>
            <select className="category-select" onChange={(e) => onCategorySelect(e.target.value)}>
                <option value="">Seleccione una categoría</option>
                {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryList;
