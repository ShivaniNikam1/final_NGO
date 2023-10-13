import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// Use moment.js for date formatting
const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 9, 15), // Year, Month (0-indexed), Day
      end: new Date(2023, 9, 17),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 9, 20),
      end: new Date(2023, 9, 22),
    },
    // Add more events as needed
  ];

  return (
    <div>
      <h2 style={{margin:'20px'}}>Upcoming Events</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 600, textAlign:'center'}}
      />
    </div>
  );
};

export default EventCalendar;
