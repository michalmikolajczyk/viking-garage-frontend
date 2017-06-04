import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import muiThemeVG from '../muiThemeVG';
import { default as AppBarVG } from '../AppBar';
import Footer from '../Footer';

export default function Container(props) {
  return (
    <MuiThemeProvider muiTheme={muiThemeVG}>
      <div>
        <AppBarVG />
        {props.children}
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
