import React, { Fragment, useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
// import UserContext from '../../context/user/userContext';

function Nav(props) {

    // const userContext = useContext(UserContext);

    // const { isAuthenticated, logout, user } = userContext;

    // const onLogout = () => {
    //     logout();
    // };

    const authLinks = (
      <Fragment>

        <div className="nav-link">
          <Link to="/leaderboard" className="white">
            Leaderboard
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/map" className="white">
            Map
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/about" className="white">
            About
          </Link>
        </div>

      </Fragment>
    )


    const guestLinks = (
        <Fragment>
          
          <div className="nav-link">
              <Link to="/about" className="white">
                Leaderboard
              </Link>
            </div>
          <div className="nav-link">
              <Link to="/about" className="white">
                About
              </Link>
            </div>
            
          
        </Fragment>
      );
      
    //   const navStyle = {
    //     color: '#424659'
    // };


      return (
        <nav className='navbar'>
            <Link to='/' className='title-link'>
                    <span className='title'>PIXIT</span>
            </Link>
            <div className='nav-links'>
                
                {props.isAuthenticated ? authLinks : guestLinks}
                
            </div>
        </nav>
    );
}

export default Nav;