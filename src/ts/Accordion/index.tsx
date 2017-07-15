import * as React from 'react';
import { FontIcon } from 'material-ui';
import iconWrap from '../iconWrap';
import Header from './Header';
import Table from './Table';

export default class Accordion extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const { open } = props;
    this.state = { open };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const icon = this.state.open
      ? iconWrap(<FontIcon className="material-icons">expand_less</FontIcon>, 'hide')
      : iconWrap(<FontIcon className="material-icons">keyboard_arrow_down</FontIcon>, 'show more');

    return (
      <div className="accordion">
        <Header call={this.toggle} icon={icon} head={this.props.header} />
        {this.state.open && <Table offer={this.props.offer}/>}
      </div>
    );
  }
}
