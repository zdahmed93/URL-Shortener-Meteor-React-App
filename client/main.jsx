import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '/imports/ui/App';
import Link from '../imports/ui/Link'
import Signup from '../imports/ui/Signup';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/links" component={Link} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
