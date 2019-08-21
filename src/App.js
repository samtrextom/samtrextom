import React from 'react'
import './App.css'
import Footer from "./Components/Footer"
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Home from './Home'
import Menu from './Components/Menu'
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import NavBar from "./Components/NavBarComponents/NavBar";
import eventData from "./Components/eventData";
import EventTile from "./Components/EventTileRows";

const events = eventData.map(event=> <EventTile key = {event.id} event ={event}/>)

function App() {

  return (
      <Router>
          <div className="App">
              <NavBar/>
              <Switch>
                  <Route path = '/' exact component = {Home}/>
                  <Route path = '/Gallery' exact component = {Gallery}/>
                  <Route path = '/About' exact component = {About}/>
                  <Route path = '/Contact' exact component = {Contact}/>
                  <Route path = '/WeddingMenu' exact render={(props) => <Menu {...props} event = {events[0].props.event}/>}/>
                  <Route path = '/GalaMenu' exact render={(props) => <Menu {...props} event = {events[1].props.event}/>}/>
                  <Route path = '/CorporateMenu' exact render={(props) => <Menu {...props} event = {events[2].props.event}/>}/>
                  <Route path = '/SocialMenu' exact render={(props) => <Menu {...props} event = {events[3].props.event}/>}/>
                  <Route path = '/FestivalMenu' exact render={(props) => <Menu {...props} event = {events[4].props.event}/>}/>
                  <Route path = '/HolidayMenu' exact render={(props) => <Menu {...props} event = {events[5].props.event}/>}/>
                  <Route path = '/SchoolMenu' exact render={(props) => <Menu {...props} event = {events[6].props.event}/>}/>
                  <Route path = '/FamilyMenu' exact render={(props) => <Menu {...props} event = {events[7].props.event}/>}/>
                  <Route path = '/ActionMenu' exact render={(props) => <Menu {...props} event = {events[8].props.event}/>}/>
              </Switch>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
