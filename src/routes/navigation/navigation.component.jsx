import {Link, Outlet} from 'react-router-dom';
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';
import {Fragment, useContext} from 'react';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from './navigation.styles';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer  to='/' className='logo-container'>
          <CrownLogo className='logo'/>
        </LogoContainer >
        <NavLinks>
          <NavLink  to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>Sign out</NavLink>
          ) : (
            <NavLink to='/auth'>Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;