import '../style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CreateRecipePage from './containers/create_recipe';
import Nav from './components/nav';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route path='/create' component={CreateRecipePage}/>
  <Route path='/' component={Home} />
  </Switch>
  </div>
</BrowserRouter>
</Provider>,
  document.getElementById('root')
);
