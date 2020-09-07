import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, purple, blue } from '@material-ui/core/colors';
import * as serviceWorker from './serviceWorker';

import Landing from './components/landing/Landing';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import User from './components/user/User';
import Terms from './components/legal/Terms';
import Privacy from './components/legal/Privacy';
import Contact from './components/legal/Contact';
import Blog from './components/legal/Blog';
import Faq from './components/legal/Faq';
import About from './components/legal/About';
import Plans from './components/legal/Plans';
import Forgot from './components/legal/Forgot';
import 'fontsource-roboto';


const theme  = createMuiTheme({

  palette: {
    primary: purple,
    secondary: blue,
  },
  tabs: {
     backgroundColor: 'white',
     selectedBackgroundColor: '#000000'
  },
  tab: {
      backgroundColor: 'white',
      selectedBackgroundColor: '#000000'
  },
  shadows: ["none"],

  typography: {
    fontFamily: "Roboto",
    subtitle1: {
      fontSize: 23,
      '@media (max-width: 960px)': {
        fontSize: 16
      }
    },
  }
  
});

const history = createBrowserHistory(); 

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin}/>
        <Route exact path='/:user' component={User}/>
        <Route exact path='/l/terms' component={Terms}/>
        <Route exact path='/l/privacy' component={Privacy}/>
        <Route exact path='/l/contact' component={Contact}/>
        <Route exact path='/l/blog' component={Blog}/>
        <Route exact path='/l/faq' component={Faq} />
        <Route exact path='/l/about' component={About}/>
        <Route exact path='/l/plans' component={Plans}/>
        <Route exact path='/l/forgot' component={Forgot}/>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
