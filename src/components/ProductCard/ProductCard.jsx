import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from '../Button/Button';
import './ProductCard.scss';

const ProductCard = (product) => {
  const { addItemToCart } = useContext(CartContext);

  const { imageUrl, name, price } = product;

  const addProductToCart = () => addItemToCart(product)

  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer" alt={`${name}`}>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button 
        buttonType="inverted" 
        btnOptions={{onClick: addProductToCart}}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard