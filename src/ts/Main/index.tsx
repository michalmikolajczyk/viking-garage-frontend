import * as React from 'react';
import {
  browserHistory,
  Router,
} from 'react-router';
import routes from '../routes';

export default function Main() {
  return (
    <Router
      routes={routes}
      history={browserHistory}
      onUpdate={() => window.scrollTo(0, 0)}
    />
  );
}
