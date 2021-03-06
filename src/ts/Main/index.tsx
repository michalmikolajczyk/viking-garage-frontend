import * as React from 'react';
import {
  browserHistory,
  Router,
} from 'react-router';
import routes from '../routes';
import ReactGA from 'react-ga';
let flag = false;

export default function Main() {
  if (process.env.GA_TRACKER && !flag) {
    ReactGA.initialize(process.env.GA_TRACKER);
    flag = true;
  }
  const handleOnUpdate = () => {
    if (process.env.GA_TRACKER) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    return window.scroll(0, 0);
  };

  return (
    <Router
      routes={routes}
      history={browserHistory}
      onUpdate={handleOnUpdate}
    />
  );
}
