import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';
import muiThemeVG from './muiThemeVG';
import routes from './routes';

export default function render(location) {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (err, redirect, props) => {
      if (err) return reject(err);
      if (redirect) return reject(redirect);
      if (props) {
        resolve(
          renderToString(
            <MuiThemeProvider muiTheme={muiThemeVG}>
              <RouterContext {...props} />
            </MuiThemeProvider>
          )
        );
      }
    });
  });
}
