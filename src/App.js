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
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  const name = 'Alex';
  return (
    <Router>

      <Navbar />
    </Router>
  );
}

export default App;
