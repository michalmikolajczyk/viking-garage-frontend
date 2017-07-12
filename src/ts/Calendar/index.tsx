import * as React from 'react';
import {
  Dialog,
  FlatButton,
  RaisedButton,
} from 'material-ui';
// import * as $ from 'jquery';
// import * as moment from 'moment';
// import 'fullcalendar';
// import 'fullcalendar/dist/gcal.min.js';
import i from '../i18n';

export default class CalendarVG extends React.Component<any, any> {
  state = { open: true };

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

  close = () => this.setState({ open: false });

  render() {
    const actions = [
      <FlatButton
        label={i('Cancel')}
        primary={true}
        onTouchTap={this.close}
      />,
      <RaisedButton
        label={i('Submit')}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.close}
      />,
    ];

    return (
      <Dialog
        modal={false}
        actions={actions}
        open={this.state.open}
        title="Calendar"
        repositionOnUpdate={false}
        autoDetectWindowHeight={false}
        autoScrollBodyContent={false}
        className="dialog-root"
        contentClassName="dialog-content"
        bodyClassName="dialog-body"
      >
        <div ref="calendar" />
      </Dialog>);
  }
}
