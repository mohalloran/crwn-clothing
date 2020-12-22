import React from 'react';
import { Link } from 'react-router-dom';

//SVGR under the hood to make it possible to transform and import SVG as a React component.
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
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

      </div>

    </div>
)


export default Header;