import React from 'react';
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

const isAuthenticated = true;


  const mainPage = (
<Dashboard/>
  )

  const splashPage = (
<Splash/>
  )





function App() {
  return (
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
  );
}

export default App;
