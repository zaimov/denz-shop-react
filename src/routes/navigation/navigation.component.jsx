import {Link, Outlet} from 'react-router-dom';
import {Fragment, useContext} from 'react';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

import './navigation.styles.scss';
import {UserContext} from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrownLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>Shop</Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>Sign out</span>
          ) : (
            <Link className='nav-link' to='/auth'>Sign in</Link>
          )}
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;