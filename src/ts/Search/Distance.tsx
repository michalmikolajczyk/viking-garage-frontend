import * as React from 'react';
import {
  SelectField,
  MenuItem,
  FontIcon,
} from 'material-ui';

const ranges = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657];

export default class Range extends React.Component<any, any> {
  filter: any
  items: any

  constructor(props) {
    super(props);
    this.state = { value: 8 };
    this.filter = props.filter;
    this.items = ranges.map(r =>  <MenuItem key={r}  value={r} primaryText={`${r} km`} />)
  }

  onChange = (event, index, value) => {
    this.setState({ value })
    this.filter(value);
  }

  render() {
    return (
      <div className="range">
        <FontIcon className="material-icons">my_location</FontIcon>
        <div className="filter">
          <SelectField
            value={this.state.value}
            onChange={this.onChange}
            maxHeight={200}
            fullWidth={true}
            hintStyle={{ paddingLeft: 30 }}
            labelStyle={{ paddingLeft: 30 }}
          >
            {this.items}
          </SelectField>
        </div>
      </div>);
  }
}
