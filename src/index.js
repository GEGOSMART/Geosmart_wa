import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from './components/Chat/Chat';
import store from  './app/store'
import WebSocketInstance from './websocket';
//import WebSocketInstance from './websocket';

class App extends React.Component{

  componentDidMount(){
    WebSocketInstance.connect();
  }

  render(){
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </Provider>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
