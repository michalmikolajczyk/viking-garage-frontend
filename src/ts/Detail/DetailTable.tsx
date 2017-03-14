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
            <TableRowColumn>Road legal</TableRowColumn>
            <TableRowColumn>No</TableRowColumn>
            <TableRowColumn>Engine Type</TableRowColumn>
            <TableRowColumn>{engineType}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>License type</TableRowColumn>
            <TableRowColumn>NA</TableRowColumn>
            <TableRowColumn>Capacity</TableRowColumn>
            <TableRowColumn>{capacity}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Min. rental period</TableRowColumn>
            <TableRowColumn>2 days</TableRowColumn>
            <TableRowColumn>Max. Power</TableRowColumn>
            <TableRowColumn>{maxPower}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Weight</TableRowColumn>
            <TableRowColumn>95 kg</TableRowColumn>
            <TableRowColumn>Top Speed</TableRowColumn>
            <TableRowColumn>100 km/h</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Seat Height</TableRowColumn>
            <TableRowColumn>{seatHeight}</TableRowColumn>
            <TableRowColumn>Torque</TableRowColumn>
            <TableRowColumn>{torque}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Max. Riders</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>0 - 100</TableRowColumn>
            <TableRowColumn>5 s</TableRowColumn>
          </TableRow>
          <TableRow>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
