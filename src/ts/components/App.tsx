import React from 'react';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import Router from 'router';

const muiTheme = getMuiTheme({
  fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  appBar: {
    textColor: 'black',
    color: 'white',
  },
  textField: {
    focusColor: '#AD000D',
  },
});

export default function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router />
    </MuiThemeProvider>
  );
}
