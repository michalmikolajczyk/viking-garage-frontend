import * as React from 'react';
import * as _ from 'lodash';
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles';
import Wrapper from '../Wrapper';
import muiThemeVG from '../muiThemeVG';

export default class Container extends React.Component<any, any> {
  static contextTypes = { data: React.PropTypes.object };

  render() {
    const userAgent = typeof navigator !== 'undefined'
      ? navigator.userAgent
      : _.get(this.context, 'data.userAgent', 'all');

    // forceUpdate() is pass to AppBar to rerender application in case of changing language or currency
    // check out ./i18n/LanguageSelection and ./i18n/CurrencySelection
    const children = React.cloneElement(this.props.children, { refresh: () => this.forceUpdate() });

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiThemeVG })}>
        <div>
          {children}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
