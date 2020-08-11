import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import * as serviceWorker from './serviceWorker';

import Landing from './components/landing/Landing';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import User from './components/user/User';

const theme  = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  tabs: {
     backgroundColor: 'white',
     selectedBackgroundColor: '#000000'
  },
  tab: {
      backgroundColor: 'white',
      selectedBackgroundColor: '#000000'
  }
});

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/admin" component={Admin}/>
      <Route exact path='/:user' component={User}/>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
