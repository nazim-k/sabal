import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import configureStore from './configureStore';
import { Header, Home, Companies, Company, Search } from './Components';

// TODO cheack preloadedState from localSorage;
const store = configureStore();

function App() {
  return <Router>
    <Provider store={ store }>
      <Header/>
      <Switch>
        <Route path="/search" component={ Search }/>
        <Route path="/companies/:company" component={ Company }/>
        <Route path="/companies" component={ Companies }/>
        <Route path="/" component={ Home }/>
      </Switch>
    </Provider>
  </Router>
}

export default App;
