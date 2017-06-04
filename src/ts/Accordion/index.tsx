import * as React from 'react';
import { FontIcon } from 'material-ui';
import Header from './Header';
import Table from './Table';

export default class Accordion extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const {
      open,
      offer,
      header,
    } = props;
    this.state = {
      open,
      offer,
      header,
    };
  }

  componentWillReceiveProps({ offer }) {
    this.setState({ offer });
  }

  toggle = () => this.setState({ open: !this.state.open })

  render() {
    const icon = this.state.open
      ? <FontIcon className="material-icons">expand_less</FontIcon>
      : <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>;

    return (
      <div className="accordion">
        <Header call={this.toggle} icon={icon} head={this.state.header} />
        {this.state.open && <Table offer={this.state.offer}/>}
      </div>
    );
  }
}
