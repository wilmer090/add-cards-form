import React, {useState} from 'react'
import styled from 'styled-components'
import Home from './components/Pages/Home'
import Login from './components/Login'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';



function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/"exact component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
