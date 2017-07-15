import * as React from 'react';
import { FontIcon } from 'material-ui';

export default class IconWrap extends React.Component<any, any> {
  state = { isMounted: false };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    if (this.state.isMounted) return <FontIcon className="material-icons">{this.props.icon}</FontIcon>;
    return <div aria-label={this.props.aria} className="hide">{this.props.aria}</div>;
  }
}
