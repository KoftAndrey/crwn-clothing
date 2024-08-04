import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../reducers/cart/cartSelectors';
import { setIsCartOpen } from '../../reducers/cart/cartActions';
import { 
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './CartIconStyles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;
