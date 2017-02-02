import React from 'react';
import {
  browserHistory,
  Route,
  Router,
} from 'react-router';
import CardContainer from 'containers/CardContainer';
import Detail from 'components/Detail';
import NotFound from 'components/NotFound';

export default function AppRouter(props) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={CardContainer} />
      <Route path="/detail" component={Detail} />
      <Route path="*" component={NotFound} />
    </Router>
  );  
}
