import * as React from 'react';
import {
  browserHistory,
  Router,
} from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';
import muiThemeVG from '../muiThemeVG';
import routes from '../Routes';

export default function Main() {
  return (
    <MuiThemeProvider muiTheme={muiThemeVG}>
      <Router
        routes={routes}
        history={browserHistory}
        onUpdate={() => window.scrollTo(0, 0)}
      />
    </MuiThemeProvider>
  );
}
