import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../reducers/categories/categoriesSelectors';
import CategotyPreview from '../../components/CategotyPreview/CategotyPreview';
import Spinner from '../../components/Spinner/Spinner';


const CategoriesPreview = () => {
  const categories  = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  
  return (
    <>
      {
        isLoading
        ? (<Spinner />)
        : (Object.keys(categories).map(title => <CategotyPreview key={title} title={title} products={categories[title]}/>))
      }
    </>
  )
}

export default CategoriesPreview;
