import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import SolvingMethods from './Components/SolvingMethods';
import BeginnersMethod from './Components/Pages/BeginnersMethod';
import Todos from './Components/Pages/Todos';

const App = () => {
  return (
    <Router>
      <div className="site-wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/solving-methods">
          <SolvingMethods />
        </Route>
        <Route path="/solving-methods/beginner's-method">
          <BeginnersMethod />
        </Route>
        <Route path="/to-dos">
          <Todos />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
