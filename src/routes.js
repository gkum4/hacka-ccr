import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FunctionDescription from './pages/FunctionDescription';
import Appointment from './pages/Appointment';
import CarreerPath from './pages/CarreerPath';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    
    <Route path="/home" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/function-description" component={FunctionDescription} />
    <Route path="/appointment" component={Appointment} />
    <Route path="/carreer-path" component={CarreerPath} />
  </Switch>
);

export default Routes;