import * as React from 'react'
import {
  browserHistory,
  Route,
  Router,
} from 'react-router'
import Offers from '../Offers'
import Detail from '../Detail'
import NotFound from '../NotFound'

export default function AppRouter(props) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Offers} />
      <Route path="/detail" component={Detail} />
      <Route path="/signup" component={NotFound} />
      <Route path="/login" component={NotFound} />
      <Route path="/bike_owners" component={NotFound} />
      <Route path="/guides_coaches" component={NotFound} />
      <Route path="/mechanics" component={NotFound} />
      <Route path="/faq" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
