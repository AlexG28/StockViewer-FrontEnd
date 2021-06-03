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
import MyStocks from './pages/myStocks';
import search from './pages/search';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path='/' exact component = {Main} />
        <Route path='/home1' component = {MyStocks} />
        <Route path='/secondary' component = {search} />

      </Switch>
    </Router>
  );
}

export default App;
