import {Outlet} from 'react-router-dom';
import {Fragment} from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from './navigation.styles';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentUser} from '../../store/user/user.selector';
import {selectIsCartOpen} from '../../store/cart/cart.selector';
import {signOutStart} from '../../store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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