import React, { Fragment, useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
// import UserContext from '../../context/user/userContext';

function Nav() {

    // const userContext = useContext(UserContext);

    // const { isAuthenticated, logout, user } = userContext;

    // const onLogout = () => {
    //     logout();
    // };


    const guestLinks = (
        <Fragment>
          
          <div className="hvr-underline-from-right hvr-rotate">
              <Link to="/about" className="white">
                About
              </Link>
            </div>
            <div className="hvr-underline-from-right hvr-rotate">
              <Link to="/register" className="white">
                How it works
              </Link>
            </div>
            <div className="hvr-underline-from-right hvr-rotate">
              <Link to="/login" className="white">
                FAQ
              </Link>
            </div>
            
          
        </Fragment>
      );
      
      const navStyle = {
        color: 'white'
    };


      return (
        <nav className='navbar'>
            <Link to='/' className='title-link'>
                <h1 style={navStyle} className='title'>
                    <i className='fas fa-star spin'></i>
                    <span className='hvr-underline-from-left'>PIXIT</span>
                </h1>
            </Link>
            <ul className='nav-links'>
                
                {/* {isAuthenticated ? authLinks : guestLinks} */}
                {guestLinks}
                
            </ul>
        </nav>
    );
}

export default Nav;