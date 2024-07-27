import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Category.scss';

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {setProducts(categoriesMap[category])}, [categoriesMap, category])
  
  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products && products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </>
  )
}

export default Category;
