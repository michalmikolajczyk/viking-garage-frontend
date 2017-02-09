import * as React from 'react';
import { MuiThemeProvider } from "material-ui/styles";
import AppRouter from '../Router';
import muiThemeVG from '../muiThemeVG'


export default function App() {
  return (
    <MuiThemeProvider muiTheme={muiThemeVG}>
      <AppRouter />
    </MuiThemeProvider>
  );
}