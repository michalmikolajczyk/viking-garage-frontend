import * as React from 'react';
import * as _ from 'lodash';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import muiThemeVG from '../muiThemeVG';
import { default as AppBarVG } from '../AppBar';
import Footer from '../Footer';

export default class Container extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object }

  render() {
    const userAgent = typeof navigator !== 'undefined'
      ? navigator.userAgent
      : _.get(this.context, 'data.userAgent', 'all');

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiThemeVG })}>
        <div>
          <AppBarVG />
          {this.props.children}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
