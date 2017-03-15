import * as React from 'react';
import Accordion from './Accordion';

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

export default function DetailList(props) {
  const { offer } = props;
  return (
    <div>
      <Accordion items={items} open={true} header="Motorcycle additional specs" />
      <Accordion items={items} open={false} header="Mechanical state" />
      <Accordion items={items} open={false} header="Available protection" />
      <Accordion items={items} open={false} header="Accessories" />
      <Accordion items={items} open={false} header="Optional services" />
    </div>
  );
}
