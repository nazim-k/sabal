import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from 'configureStore';
import { Header, Company } from 'Components';
import { StockConainer, CompaniesContainer, SearchContainer } from 'Containers';
import { preloadedState } from 'helpers'


const store = configureStore({
  company: {
    comments: preloadedState()
  }
});

function App() {

  return <Provider store={ store }>
    <Router>

      <Header/>

      <Switch>
        <Route path="/companies/:company" component={ Company }/>
        <Route path="/companies" component={ CompaniesContainer }/>
        <Route path="/" component={ StockConainer }/>
      </Switch>

      <SearchContainer/>

    </Router>
  </Provider>
}

export default App;
