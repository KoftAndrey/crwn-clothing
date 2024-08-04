import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../reducers/categories/categoriesSelectors';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';
import './Category.scss';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const { category } = useParams();

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {setProducts(categoriesMap[category])}, [categoriesMap, category])
  
  return (
    <>
      <h2 className="category-title">{category}</h2>
      {
        isLoading
          ? (<Spinner />)
          : (
              <div className="category-container">
                {products && products.map(product => <ProductCard key={product.id} {...product} />)}
              </div>
            )
      }
    </>
  )
}

export default Category;
