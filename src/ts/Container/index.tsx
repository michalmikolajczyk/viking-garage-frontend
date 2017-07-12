import * as React from 'react';
import * as _ from 'lodash';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import muiThemeVG from '../muiThemeVG';
import Footer from '../Footer';
import Calendar from '../Calendar';

export default class Container extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object }

  render() {
    const userAgent = typeof navigator !== 'undefined'
      ? navigator.userAgent
      : _.get(this.context, 'data.userAgent', 'all');

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiThemeVG })}>
        <div>
          {this.props.children}
          <Calendar />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
