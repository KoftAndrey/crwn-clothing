import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdownStyles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
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
