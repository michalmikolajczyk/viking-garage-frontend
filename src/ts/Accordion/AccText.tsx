import * as React from 'react';
import { FontIcon } from 'material-ui';
import Header from './Header';

export default class Accordion extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const { open } = props;
    this.state = { open };
  }

  toggle = () => this.setState({ open: !this.state.open })

  render() {
    const icon = this.state.open
      ? <FontIcon className="material-icons">expand_less</FontIcon>
      : <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>;

    return (
      <div className="accordion">
        <Header call={this.toggle} icon={icon} head={this.props.header} />
        {this.state.open && this.props.children}
      </div>
    );
  }
}
