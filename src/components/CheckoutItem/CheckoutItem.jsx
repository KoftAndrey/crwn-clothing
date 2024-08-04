import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../reducers/cart/cartSelectors';
import { changeProductQuantity, removeItemFromCart } from '../../reducers/cart/cartActions';
import './CheckoutItem.scss';

const CheckoutItem = ({ id, name, imageUrl, price, quantity }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  const decrementQuantity = () => dispatch(changeProductQuantity(cartItems, id, 'decrement'));
  const incrementQuantity = () => dispatch(changeProductQuantity(cartItems, id, 'increment'));
  const handleRemove = () => dispatch(removeItemFromCart(cartItems, id));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity <= 1
          ? <div className="arrow">&#10094;</div>
          : <div className="arrow" onClick={decrementQuantity}>&#10094;</div>
        }  
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementQuantity}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleRemove}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;
