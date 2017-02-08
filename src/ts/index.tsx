// Import React and React DOM
import * as React from 'react';
import { render } from 'react-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Import the Hot Module Reloading App Container – more on why we use 'require' below
const { AppContainer } = require('react-hot-loader');

// Import our App container (which we will create in the next step)
import App from 'App';

// Get the root element from the HTML
const rootEl = document.getElementById('app');

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./App').default;

    // And render it into the root element again
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  })
}
