import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About'
import Projects from './Components/Projects'
const App = () => {
  
  return (
    <div >
      <Nav />
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />    
        <Route exact path="/projects" component={Projects} />    
        <Route exact path="/contact" component={Home} />          
      </Switch>
    </div>
  )
}

export default App
