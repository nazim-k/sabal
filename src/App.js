import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import configureStore from './configureStore';
import { Header, Company } from './Components';
import { HomeConainer, CompaniesContainer, SearchContainer } from './Containers';

// TODO cheack preloadedState from localSorage;
const store = configureStore();

function App() {

  const [ searchVisibility, setSearchVisibility] = useState(false);

  return <Provider store={ store }>
    <Router>

      <Header openSearch={ () => setSearchVisibility(true) }/>

      <Switch>
        <Route path="/companies/:company" component={ Company }/>
        <Route path="/companies" component={ CompaniesContainer }/>
        <Route path="/" component={ HomeConainer }/>
      </Switch>

      {
        searchVisibility && <SearchContainer
          closeSearch={ () => setSearchVisibility(false) }
        />

      }

    </Router>
  </Provider>
}

export default App;
