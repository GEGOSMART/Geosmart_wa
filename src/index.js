import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// views
import Login from './views/LoginPage';
import Signup from './views/SignupPage';
import Home from './views/HomePage';
import Games from  './views/Games';
import Questions from  './views/Questions';

import Profile from './views/Profile';
import UpdateUser from './views/UpdateUser';
import Mapgame from './views/Mapgame';
import Navbar from './components/Navbar';
import BestScores from  './views/BestScores';

// redux store
import store from  './redux/store';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/games" component={Games} />
        <Route path="/play/map" component={Mapgame} />
        <Route path="/play/flags" component={Questions} />
        <Route path="/play/places" component={Questions} />
        <Route path="/bestscores" component={BestScores} />

        <Route path="/profile" component={Profile} />
        <Route path="/update-user" component={UpdateUser} />

        <Redirect from="/" to="home" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
