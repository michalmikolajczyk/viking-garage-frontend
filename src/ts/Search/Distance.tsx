import * as React from 'react';
import {
  AutoComplete,
  MenuItem,
  FontIcon,
} from 'material-ui';
import i from '../i18n';

const dist = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657];
const convert = (data) => data.map(d => ({text: `${d} km`, value: d}))

export default class Distance extends React.Component<any, any> {
  state = { data: convert(dist) };

  onNewRequest = (distance, index) => {
    if (typeof distance === 'object') return this.props.filter(distance.value);
    const int = distance.indexOf('km') !== -1 ? distance : distance.split('km')[0];
    this.props.filter(int);
  }

  onUpdateInput = (input) => {
    const intInput = parseInt(input);
    const data = convert(dist.filter(d => d > intInput));
    this.setState({ data });
  }

  render() {
    return (
      <div className="distance">
        <FontIcon className="material-icons">my_location</FontIcon>
        <div className="filter">
          <AutoComplete
            id="search-distance"
            hintText={i('Set distance...')}
            maxSearchResults={5}
            filter={AutoComplete.noFilter}
            openOnFocus={true}
            onNewRequest={this.onNewRequest}
            onUpdateInput={this.onUpdateInput}
            dataSource={this.state.data}
            fullWidth={true}
            hintStyle={{ paddingLeft: 30 }}
          />
        </div>
      </div>);
  }
}
