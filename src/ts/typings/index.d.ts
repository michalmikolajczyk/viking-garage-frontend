import '@types/fullcalendar';

declare global {
  interface JQuery {
    fullCalendar(options: any): JQuery;
  }
}
