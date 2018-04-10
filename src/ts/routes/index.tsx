import * as React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import About from '../Page/About';
import Blog from '../Blog';
import Container from '../Container';
import Offers from '../Offers';
import Expert from '../Page/Expert';
import FAQ from '../Page/FAQ';
import Owner from '../Page/Owner';
import Detail from '../Detail';
import Login from '../Login';
import Reset from '../Login/Reset';
import Check from '../Login/Check';
import Change from '../Login/Change';
import NotFound from '../NotFound';
import Page from '../Page';
import Profile from '../Profile';
import Privacy from '../Page/Privacy';
import Signup from '../Signup';
import Confirm from '../Signup/Confirm';
import Verify from '../Signup/Verify';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={Offers} />
    <Route path="/login" component={Login} />
    <Route path="/user/profile" component={Profile} />
    <Route path="/signup" component={Signup} />
    <Route path="/confirm/:email" component={Confirm} />
    <Route path="/verify/:token" component={Verify} />
    <Route path="/reset" component={Reset} />
    <Route path="/change/:token" component={Change} />
    <Route path="/check" component={Check} />
    <Route path="/offer/:id(/:url)" component={Detail} />
    <Route path="/owner" component={Owner} />
    <Route path="/expert" component={Expert} />
    <Route path="/faq" component={FAQ} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/privacy-policy" component={Privacy} />
    <Route path="*" component={NotFound} />
  </Route>
);
