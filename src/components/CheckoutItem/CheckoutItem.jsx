import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CheckoutItem.scss';

const CheckoutItem = ({ id, name, imageUrl, price, quantity }) => {
  const { removeItemFromCart, changeProductQuantity } = useContext(CartContext);

  const incrementQuantity = () => changeProductQuantity(id, 'increment');
  const decrementQuantity = () => changeProductQuantity(id, 'decrement');
  const handleRemove = () => removeItemFromCart(id);

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
