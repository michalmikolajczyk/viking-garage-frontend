import React from 'react';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import Router from 'router';

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
