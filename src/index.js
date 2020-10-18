import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// views
import Login from './views/LoginPage';
import Signup from './views/SignupPage';
import Home from './views/HomePage';
import Games from  './views/Games';
import Questions from  './views/Questions';
import Mapgame from './views/Mapgame'
import Navbar from './components/Navbar'
// redux store
import store from  './redux/store'

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/play/map" component={Mapgame} />
        <Route path="/play/flags" component={Questions} />
        <Route path="/play/places" component={Questions} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
