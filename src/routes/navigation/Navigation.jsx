import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { sighOutUser } from '../../utils/firebase/firebase';
import { selectCurrentUser } from '../../reducers/user/userSelectors';
import { selectIsCartOpen } from '../../reducers/cart/cartSelectors';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { 
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './NavigationStyles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
          {currentUser 
             ? (<NavLink as="span" onClick={sighOutUser}>Sign out</NavLink>)
             : (<NavLink to="/auth">Sign in</NavLink>)
           }
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <CartIcon />
          </li>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation;
