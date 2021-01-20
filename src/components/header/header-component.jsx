import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

//SVGR under the hood to make it possible to transform and import SVG as a React component.
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';


//currentUser destructured this.props.currentUser
const Header = ({currentUser, hidden}) => (
    <div className='header'>
      <Link to='/' className='logoContainer'>
        <Logo className='logo'/>
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {/* If we have a currentUser object, user is Signed in  */}
        {currentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
            
        }

        <CartIcon />
        

      </div>

      {hidden ? null : <CartDropDown /> }
      

    </div>
)

//connect is a higher order component
//higher order components are functions that accept 
//functions and return a suped up component
//state is the root reducer
//mapStateToProps makes currentUser available as a prop
//Anytime the store changes mapStateToProps is called .
const mapStateToProps = ({user:{ currentUser }, cart:{ hidden }}) => {

  return {
     currentUser: currentUser,
     hidden: hidden
  }
}

export default connect(mapStateToProps,null)(Header);