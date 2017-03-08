import * as React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui';

export default function DetailTable(props) {
  const {
    traits,
  } = props;
  // const {
  //   engineType,
  //   capacity,
  //   maxPower,
  //   torque,
  //   seatHeight
  // } = traits;
  return (
    <div className="table">
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>Engine Type</TableRowColumn>
            <TableRowColumn>2-stroke</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Capacity</TableRowColumn>
            <TableRowColumn>249cc</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Max Power</TableRowColumn>
            <TableRowColumn>45HP</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Torque</TableRowColumn>
            <TableRowColumn>28Nm</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Seat Height</TableRowColumn>
            <TableRowColumn>960mm</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>)
}
