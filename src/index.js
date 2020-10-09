import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// views
import Login from './views/Login/LoginIndex';
import Signup from './views/Signup/SignupIndex';
// redux store
import store from  './redux/store'

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
