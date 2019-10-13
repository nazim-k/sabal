import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { Header, Home, Companies, Company, Search } from './Components';

function App() {
  return <Router>
    <Header/>
    <Switch>
      <Route path="/search" component={ Search }/>
      <Route path="/companies/:company" component={ Company }/>
      <Route path="/companies" component={ Companies }/>
      <Route path="/" component={ Home }/>
    </Switch>
  </Router>
}

export default App;
