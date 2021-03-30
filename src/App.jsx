import React from 'react';

import './App.css';
import Homepage from './pages/home/home.jsx';
import About from './pages/aboutUs/about.jsx';
import Users from './pages/users.jsx'
import NavBar from './common/CustomNavBar.jsx';

import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Demo from './pages/demo.jsx';


function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/users' component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
