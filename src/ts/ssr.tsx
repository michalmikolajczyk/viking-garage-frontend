import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';
import DataProvider from './DataProvider';
import muiThemeVG from './muiThemeVG';
import routes from './routes';
import { StripeProvider } from 'react-stripe-elements';

injectTapEventPlugin();

export default function render(location, data) {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (err, redirect, props) => {
      if (err) return reject(err);
      if (redirect) return reject(redirect);
      if (props) {
        resolve(
          renderToString(
            <StripeProvider apiKey="pk_test_12345">
              <DataProvider data={data}>
                <RouterContext {...props} />
              </DataProvider>
            </StripeProvider>
          )
        );
      }
    });
  });
}
