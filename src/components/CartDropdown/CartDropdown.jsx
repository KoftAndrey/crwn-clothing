import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../reducers/cart/cartSelectors';
import { setIsCartOpen } from '../../reducers/cart/cartActions';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdownStyles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length 
            ? (cartItems.map(product => <CartItem key={product.id} {...product} />))
            : (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      <Button btnOptions={{onClick: goToCheckoutHandler}}>Checkout</Button> 
    </CartDropdownContainer>
  )
}

export default CartDropdown;
