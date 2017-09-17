import * as React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import Container from '../Container';
import Offers from '../Offers';
import Detail from '../Detail';
import Login from '../Login';
import NotFound from '../NotFound';
import Page from '../Page';
import Profile from '../Profile';
import Privacy from '../Page/Privacy';
import Signup from '../Signup';
import Confirm from '../Signup/Confirm';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={Offers} />
    <Route path="/login" component={Login} />
    <Route path="/profile/:id" component={Profile} />
    <Route path="/signup" component={Signup} />
    <Route path="/confirm/:email" component={Confirm} />
    <Route path="/offer/:id(/:url)" component={Detail} />
    <Route path="/page/owner" component={Page} />
    <Route path="/page/guide" component={Page} />
    <Route path="/page/mechanic" component={Page} />
    <Route path="/page/faq" component={Page} />
    <Route path="/privacy-policy" component={Privacy} />
    <Route path="*" component={NotFound} />
  </Route>
);
