import * as React from 'react';
import * as _ from 'lodash';
import {
  FontIcon,
  FlatButton,
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui';

function createTable(items) {
  const half = Math.ceil(items.length/2);
  const table = _.map(_.range(half), (index) => (
    <TableRow key={index}>
      <TableRowColumn>{items[index][0]}</TableRowColumn>
      <TableRowColumn>{items[index][1]}</TableRowColumn>
      <TableRowColumn>{items[index + half] && items[index + half][0]}</TableRowColumn>
      <TableRowColumn>{items[index + half] && items[index + half][1]}</TableRowColumn>
    </TableRow>));

  return (
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false}>
        {table}
        <TableRow />
      </TableBody>
    </Table>);
}

export default class Accordion extends React.Component<any, any> {
  private header: any;
  private tablebody: any;

  constructor(props) {
    super(props);
    const {
      open,
      items,
      header,
    } = props;
    this.state = { open };
    this.header = header;
    this.tablebody = createTable(items);
    this.toggle = this.toggle.bind(this);
  }

  toggle() { this.setState({ open: !this.state.open }); }

  render() {
    const icon = this.state.open
      ? <FontIcon className="material-icons">expand_less</FontIcon>
      : <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
    const header = this.header && (
      <div className="header">
        <FlatButton
          icon={icon}
          disableTouchRipple={true}
          onTouchTap={this.toggle}
        >{this.header}</FlatButton>
      </div>);

    return (
      <div className="accordion">
        {header}
        {this.state.open ? this.tablebody : null}
      </div>
    );
  }
}
