import * as React from 'react'
import {
  browserHistory,
  Route,
  Router,
} from 'react-router'
import Offers from '../Offers'
import Detail from '../Detail'
import NotFound from '../NotFound'
import Login from '../Login'

export default function AppRouter(props) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Offers} />
      <Route path="/detail" component={Detail} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={NotFound} />
      <Route path="/bike-owners" component={NotFound} />
      <Route path="/guides-coaches" component={NotFound} />
      <Route path="/mechanics" component={NotFound} />
      <Route path="/faq" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
