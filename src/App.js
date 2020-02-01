import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/Components/layout/Nav'
import Splash from './Components/SplashPage/Splash'
import Dashboard from '../src/Components/Dashboard/Dashboard'

const isLoggedIn = true;


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
        <Nav />
        <div className='container'>

        {isLoggedIn ? mainPage : splashPage}
          
            {/* <Alerts /> */}
            {/* <Preload /> */}
            <Switch>
            </Switch>
        </div>
    </div>
</Router>
  );
}

export default App;
