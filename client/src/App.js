import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/Components/layout/Nav'
import Splash from './Components/SplashPage/Splash'
import Dashboard from '../src/Components/Dashboard/Dashboard'
import Leaderboard from '../src/Components/Leaderboard/Leaderboard'

// pages
import Register from '../src/Components/auth/Register';
import Login from '../src/Components/auth/Login';
import About from '../src/Components/About';

// context
import UserState from './context/user/UserState';
import AlertState from './context/alert/AlertState';


  const mainPage = (
<Dashboard/>
  )

  const splashPage = (
<Splash/>
  )





const App = () => {
  const userContext = useContext(UserContext);
  const {  isAuthenticated } = userContext;

  return (
    <UserState>
      <AlertState>
        <Router>
          <div className='App'>
            <Nav isAuthenticated={isAuthenticated}/>
               <div className='container'>

                  {/* <Leaderboard/> */}
                  {/* <MapComponent/> */}

                  {isAuthenticated ? mainPage : splashPage}
                
                  {/* <Alerts /> */}
                  {/* <Preload /> */}
              </div>
          </div>
        </Router>

      </AlertState>
    </UserState>
  );
}

export default App;
