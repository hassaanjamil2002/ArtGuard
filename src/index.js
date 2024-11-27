import React from 'react';
import ReactDOM from 'react-dom';
import OwnershipTransfer from "./views/ownershiptransfer";
import SignUp from './views/signup';
import Login from './views/login';
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import NotFound1, { NotFound } from './views/not-found';
import Home from './views/home';
import Register from './views/register'; // Import the Register page component

const App = () => {
  return (
    <AuthProvider> {/* Wrap your App inside AuthProvider */}
      <Router>
        <Switch>
          <Route component={SignUp} exact path="/signup" />
          <Route component={Home} exact path="/" />
          <Route component={Register} exact path="/register" /> {/* Add the Register route */}
          <Route component={Login} exact path="/login" />
          <Route component={OwnershipTransfer} exact path="/ownership-transfer" />
          <Route component={NotFound1} path="**" />
          <Redirect to="**" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
