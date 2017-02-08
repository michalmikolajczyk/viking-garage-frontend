import React, { Component } from 'react';
import {
  DatePicker,
  FontIcon,
} from 'material-ui';

export default class DateComponent extends Component<any, any> {

  constructor(props) {
    super(props);
    let now = new Date()
    this.state = {
      startDate: now,
      // get a week forward
      endDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
    }
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
  }

  public updateFilter() {
    this.props.filter({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    })
  }

  public onChangeStart(event, date) {
    this.setState({startDate: date});
    this.updateFilter();
  }

  public onChangeEnd(event, date) {
    this.setState({endDate: date});
    this.updateFilter();
  }

  render() {
    return (
      <div>
        <FontIcon className="material-icons">today</FontIcon>
        <DatePicker
          // automatically accept and close the picker on select
          autoOk={true}
          value={this.state.startDate}
          onChange={this.onChangeStart}
          hintText="Today" />
        <FontIcon className="material-icons">date_range</FontIcon>
        <DatePicker
          autoOk={true}
          value={this.state.endDate}
          onChange={this.onChangeEnd}
          hintText="19/01/2017" />
      </div>);
  }
}

