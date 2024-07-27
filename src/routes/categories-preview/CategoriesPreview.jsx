import { useContext } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import CategotyPreview from '../../components/CategotyPreview/CategotyPreview';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => <CategotyPreview key={title} title={title} products={categoriesMap[title]}/>)}
    </>
  )
}

export default CategoriesPreview;
