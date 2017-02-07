import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  MuiThemeProvider,
} from 'material-ui/styles';
import Router from 'react-router';

const muiTheme = getMuiTheme({
  fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  palette: {
    primary1Color: 'black',
  },
  appBar: {
    color: 'white',
    textColor: 'black',
  },
});

export default function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router />
    </MuiThemeProvider>
  );
}
