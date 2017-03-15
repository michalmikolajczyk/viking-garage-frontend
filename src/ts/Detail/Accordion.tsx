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

const items = [
  ['Cylinder count', '1'],
  ['Bore / Stroke', '55 mm'],
  ['Transmission', '6 gears, MT'],
  ['Compression Ratio', 'xxx'],
  ['Suspension', 'Sanchez'],
  ['Frame', 'Alloy'],
  ['Wheelbase', '1597 mm'],
  ['Rake, Trail', 'wtf'],
  ['Wheel sizes', '21" F, 19" R'],
  ['Tires', 'EXCEL'],
  ['Brakes', 'Brembo'],
  ['Fuel Capacity', '7.5 l'],
  ['Ignition Type', 'Kickstarr'],
  ['Kickstand', 'No'],
  ['Lights', 'No'],
  ['Storage Space', 'No'],
];

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
      </TableBody>
    </Table>);
}

export default class Accordion extends React.Component<any, any> {
  private tablebody: any;

  constructor(props) {
    super(props);
    this.state = { open: true };
    this.tablebody = createTable(items);
  }

  render() {
    const icon = this.state.open
      ? <FontIcon className="material-icons">expand_less</FontIcon>
      : <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
    const tablebody = this.state.open ? this.tablebody : null

    return (
      <div className="accordion">
        <div className="header">
          <FlatButton
            icon={icon}
            disableTouchRipple={true}
            onTouchTap={() => this.setState({ open: !this.state.open })}
          >Motorcycle additional specs</FlatButton>
        </div>
        {tablebody}
      </div>
    );
  }
}
