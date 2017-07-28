import * as React from 'react';
import { FontIcon } from 'material-ui';

interface IconWrapProp {
  icon: string;
  aria?: string;
  style?: object;
}

interface IconWrapState {
  isMounted: boolean;
}

export default class IconWrap extends React.Component<IconWrapProp, IconWrapState> {
  state = { isMounted: false };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const {
      aria,
      icon,
      style,
    } = this.props;
    if (this.state.isMounted) return <FontIcon className="material-icons" style={style}>{icon}</FontIcon>;
    return <div aria-label={aria || ''} className="hide">{aria || ''}</div>;
  }
}
