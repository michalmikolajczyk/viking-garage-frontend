import * as React from 'react';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/gcal.min.js';
import * as _ from 'lodash';

export default class CalendarVG extends React.Component<any, any> {

  componentDidMount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar({
      header: {
        left: '',
        center: 'KTM SX 125, 2013',
        right: 'prev,next,today',
      },
      googleCalendarApiKey: 'AIzaSyCf_-TbI116dCRFyfB8Wx8ufxewlMAI5wA',
      events: {
        googleCalendarId: '44jn1fb44u4uju8hm2tv34ncpg@group.calendar.google.com',
      },
      eventColor: 'rgba(189, 0, 3, 0.3)',
      allDaySlot: false,
      slotDuration: '00:30:00',
      minTime: '09:00:00',
      maxTime: '20:00:00',
      selectable: true,
      selectOverlap: false,
      droppable: true,
      editable: true,
      defaultView: 'agendaWeek',
    });
  }

  componentWillUnmount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (<div ref="calendar" />);
  }
}
