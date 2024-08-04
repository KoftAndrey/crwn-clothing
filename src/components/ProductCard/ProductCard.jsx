import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../reducers/cart/cartSelectors';
import { addItemToCart } from '../../reducers/cart/cartActions';
import Button from '../Button/Button';
import './ProductCard.scss';

const ProductCard = (product) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  

  const { imageUrl, name, price } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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