import * as React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import Container from '../Container';
import Offers from '../Offers';
import Create from '../Offer/Create';
import Detail from '../Detail';
import NotFound from '../NotFound';
import Login from '../Login';
import Change from '../Login/Change';
import Check from '../Login/Check';
import Reset from '../Login/Reset';
import Signin from '../Signin';
import Confirm from '../Signin/Confirm';
import Verify from '../Signin/Verify';
import Profile from '../Profile';
import Page from '../Page';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={Offers} />
    <Route path="/offer/create" component={Create} />
    <Route path="/offer/:id(/:url)" component={Detail} />
    <Route path="/login" component={Login} />
    <Route path="/reset" component={Reset} />
    <Route path="/confirm/:email" component={Confirm} />
    <Route path="/change/:token" component={Change} />
    <Route path="/signin" component={Signin} />
    <Route path="/check" component={Check} />
    <Route path="/verify/:token" component={Verify} />
    <Route path="/user/profile" component={Profile} />
    <Route path="/page/:type" component={Page} />
    <Route path="*" component={NotFound} />
  </Route>
);
