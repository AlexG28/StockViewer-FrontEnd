/*
video tutorial for main stuff
https://www.youtube.com/watch?v=w7ejDZ8SWv8

tutorial for navbar
https://www.youtube.com/watch?v=VzWBLj_CfpE

*/

// import our own components
//import Header from './components/Header';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main from './pages/index';
import search from './pages/search';
import mainStocks from './pages/mainStocks';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path='/' exact component = {Main} />
        <Route path='/home1' component = {search} />
        <Route path='/secondary' component = {mainStocks} />

      </Switch>
    </Router>
  );
}

export default App;
