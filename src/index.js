import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from './components/Chat/Chat';
import store from  './app/store'

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/chat/:chatID/" component={Chat} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
