import * as React from 'react';
import {
  browserHistory,
  Route,
  Router,
} from 'react-router';
import Offers from '../Offers';
import Detail from '../Detail';
import NotFound from '../NotFound';
import Login from '../Login';
import Change from '../Login/Change';
import Check from '../Login/Check';
import Reset from '../Login/Reset';
import Signin from '../Signin';
import Confirm from '../Signin/Confirm';

export default function AppRouter(props) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Offers} />
      <Route path="/detail" component={Detail} />
      <Route path="/login" component={Login} />
      <Route path="/reset" component={Reset} />
      <Route path="/confirm/:email" component={Confirm} />
      <Route path="/change/:token" component={Change} />
      <Route path="/signin" component={Signin} />
      <Route path="/check" component={Check} />
      <Route path="/verify/:token" component={Offers} />
      <Route path="/bike-owners" component={NotFound} />
      <Route path="/guides-coaches" component={NotFound} />
      <Route path="/mechanics" component={NotFound} />
      <Route path="/faq" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
