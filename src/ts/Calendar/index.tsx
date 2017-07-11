import * as React from 'react';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import * as _ from 'lodash';

export default class CalendarVG extends React.Component<any, any> {

  componentDidMount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar({});
  }

  componentWillUnmount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (<div ref="calendar" />);
  }
}
