import React, { Component, Fragment } from 'react';
import ReactDOM  from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './dashboard/Dashboard';
import Cards from './deck/Cards';
import Player from './player/Player';
import Alert from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth'

 import '../../styles/main.scss';


const alertOptions = {
  timeout: 3000,
  position: 'top right'
}

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
              <Header />
              <Alert />
              <div className="container vh-100">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/deck/:id" component={Cards} />
                  <Route exact path="/player/:id" component={Player} />
                </Switch> 
              </div>
          </Router>
        </AlertProvider> 
      </Provider>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));