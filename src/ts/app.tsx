import './helpers/polyfills';
import * as React from 'react';
import { render } from 'react-dom';
import DataProvider from './DataProvider';
import Main from './Main';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
const { AppContainer } = require('react-hot-loader');
import { StripeProvider } from 'react-stripe-elements';
const stripePubKey = process.env.STRIPE_PUB_KEY;

injectTapEventPlugin();
const root = document.getElementById('app');

render(
  <AppContainer>
    <StripeProvider apiKey={stripePubKey}>
      <DataProvider data={window['APP_DATA']}>
        <Main />
      </DataProvider>
    </StripeProvider>
  </AppContainer>,
  root,
);

// Handle hot reloading requests from Webpack
declare var module: { hot: any };
if (module.hot) {
  module.hot.accept('./Main', () => {
    // If we receive a HMR request for our App container,
    // then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./Main').default;
    render(<AppContainer><NextApp /></AppContainer>, root);
  });
}
