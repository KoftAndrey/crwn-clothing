import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import { fetchCategoriesAsync } from '../../reducers/categories/categoriesActions';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';


const Shop = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
  )
}

export default Shop;
