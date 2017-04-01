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
    const { filter } = props;
    this.state = { range: 8 };
    this.filter = filter;
    this.onChange = this.onChange.bind(this);
    this.items = ranges.map(r =>  <MenuItem value={r} primaryText={`${r} km`} key={r} />)
  }

  onChange(range) {
    this.setState({ range })
    this.filter(range);
  }

  render() {
    return (
      <div className="range">
        <FontIcon className="material-icons">my_location</FontIcon>
        <div className="filter">
          <SelectField
            value={this.state.range}
            onChange={(event, index, value) => { this.onChange(value) }}
            fullWidth={true}
            maxHeight={200}
          >
            {this.items}
          </SelectField>
        </div>
      </div>);
  }
}
