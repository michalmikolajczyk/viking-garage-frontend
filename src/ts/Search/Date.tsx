import * as React from 'react';
import {
  DatePicker,
  FontIcon,
} from 'material-ui';

export default class DateVG extends React.Component<any, any> {

  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      startDate: now,
      // get a two weeks forward
      endDate: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000),
    };
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
  }

  public updateFilter() {
    this.props.filter({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    });
  }

  public onChangeStart(event, date) {
    this.setState({ startDate: date });
    this.updateFilter();
  }

  public onChangeEnd(event, date) {
    this.setState({ endDate: date });
    this.updateFilter();
  }

  render() {
    return (
      <div className="date">
        <FontIcon className="material-icons">today</FontIcon>
        <DatePicker
          className="filter"
          // automatically accept and close the picker on select
          autoOk={true}
          value={this.state.startDate}
          onChange={this.onChangeStart}
          hintText="Today"
          fullWidth={true}
        />
        <FontIcon className="material-icons">date_range</FontIcon>
        <DatePicker
          className="filter"
          autoOk={true}
          value={this.state.endDate}
          onChange={this.onChangeEnd}
          hintText="19/01/2017"
          fullWidth={true}
        />
      </div>);
  }
}
