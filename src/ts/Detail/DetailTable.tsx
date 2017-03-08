import * as React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui';
import * as _ from 'lodash';

export default function DetailTable(props) {
  const traits = _.get(props, 'offer.traits');
  const {
    engineType,
    capacity,
    maxPower,
    torque,
    seatHeight,
  } = traits;
  return (
    <div className="table">
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>Engine Type</TableRowColumn>
            <TableRowColumn>{engineType}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Capacity</TableRowColumn>
            <TableRowColumn>{capacity}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Max Power</TableRowColumn>
            <TableRowColumn>{maxPower}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Torque</TableRowColumn>
            <TableRowColumn>{torque}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Seat Height</TableRowColumn>
            <TableRowColumn>{seatHeight}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
