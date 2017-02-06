import React from 'react';
import {
  browserHistory,
  Route,
  Router,
} from 'react-router';
import Offers from 'Offers';
import Detail from 'Detail';
import NotFound from 'NotFound';

export default function AppRouter(props) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Offers} />
      <Route path="/detail" component={Detail} />
      <Route path="*" component={NotFound} />
    </Router>
  );  
}
