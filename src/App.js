import React from 'react'
import './App.css'
import Footer from "./Components/Footer"
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Gallery from './Gallery'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import NavBar from "./Components/NavBarComponents/NavBar";

function App() {
  return (
      <Router>
          <div className="App">
              <NavBar/>
              <Switch>
                  <Route path = '/' exact component = {Home}/>
                  <Route path = '/Menu' exact component = {Menu}/>
                  <Route path = '/Gallery' exact component = {Gallery}/>
                  <Route path = '/About' exact component = {About}/>
                  <Route path = '/Contact' exact component = {Contact}/>
              </Switch>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
