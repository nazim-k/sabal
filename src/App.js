import React, { useState } from 'react';
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

  const [ searchVisibility, setsearchVisibility] = useState(false);

  return <Provider store={ store }>
    <Router>

      <Header openSearch={ () => setsearchVisibility(true) }/>

      <Switch>
        <Route path="/companies/:company" component={ Company }/>
        <Route path="/companies" component={ Companies }/>
        <Route path="/" component={ Home }/>
      </Switch>

      <Search
        searchVisibility={ searchVisibility }
        closeSearch={ () => setsearchVisibility(false) }
      />

    </Router>
  </Provider>
}

export default App;
