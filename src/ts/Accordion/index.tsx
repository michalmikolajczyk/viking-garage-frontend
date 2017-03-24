import * as React from 'react';
import { FontIcon } from 'material-ui';
import Header from './Header';
import Table from './Table';

export default class Accordion extends React.Component<any, any> {
  private header: any;
  private table: any;

  constructor(props) {
    super(props);
    const {
      open,
      items,
      header,
    } = props;
    this.state = { open };
    this.header = header;
    this.table = <Table items={items} />;
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const icon = this.state.open
      ? <FontIcon className="material-icons">expand_less</FontIcon>
      : <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>;
    const header = this.header && <Header call={this.toggle} icon={icon} head={this.header} />;

    return (
      <div className="accordion">
        {header}
        {this.state.open && this.table}
      </div>
    );
  }
}
