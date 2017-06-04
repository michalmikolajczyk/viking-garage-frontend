import * as React from 'react';

export default class DataProvider extends React.Component<any, any> {
  static childContextTypes = {
    data: React.PropTypes.object
  }

  getChildContext() {
    return {
      data: this.props.data || {}
    };
  }

  render() {
    return this.props.children;
  }
}
