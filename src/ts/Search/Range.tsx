import * as React from 'react';
import {
  SelectField,
  MenuItem,
  FontIcon,
} from 'material-ui';

export default function Range({ filter }) {
  return (
  <div className="range">
    <FontIcon className="material-icons">my_location</FontIcon>
    <div className="filter">
      <SelectField
        floatingLabelText="Range"
        onChange={(event, index, value) => { filter(value) }}
        fullWidth={true}
      >
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </SelectField>
    </div>
  </div>);
}
