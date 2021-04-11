import React from 'react';

import './App.css';
import Homepage from './pages/home/home.jsx';
import About from './pages/aboutUs/about.jsx';
import Users from './pages/users.jsx'
// import NavBar from './common/CustomNavBar.jsx';
import NavBar from './common/NavBar.js';

import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
  // Link
} from "react-router-dom";
// import Demo from './pages/demo.jsx';


function App() {
  return (
    <div>
      <NavBar/>
      <HashRouter basename="/">
       
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/users' component={Users} />
        
      </HashRouter>
    </div>
  );
}

export default App;
