import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './CategotyPreview.scss';

const CategotyPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">
      <Link to={title}>{title}</Link>
      </h2>
      <div className="preview">
        {
          products
          .filter((_, i) => i < 4)
          .map(product => <ProductCard key={product.id} {...product} />)
        }
      </div>
    </div>
  )
}

export default CategotyPreview;
