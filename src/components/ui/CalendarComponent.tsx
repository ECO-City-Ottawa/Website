'use client';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function CustomEvent({ event }: { event: any }) {
  return (
    <a 
      href={event.link || '#'} 
      className="block w-full h-full text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
      title={event.title}
    >
      {event.title}
    </a>
  );
}

export default function CalendarComponent({ events = [] }: { events?: any[] }) {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<any>(Views.MONTH);

  return (
    <div className="h-[600px] w-full rounded-2xl bg-white p-6 border border-black/10">
      {/* 
        This uses standard react-big-calendar but styled locally to match the app.
        To exactly replicate shadcn-ui-big-calendar, you can drop their raw CSS
        file into the project and import it instead of the default css.
      */}
      <style>{`
        .rbc-calendar {
          font-family: inherit;
        }
        .rbc-toolbar button {
          border-radius: 6px;
          border-color: rgba(0,0,0,0.1);
        }
        .rbc-toolbar button.rbc-active {
          background-color: var(--brand-green);
          color: white;
          border-color: var(--brand-green);
        }
        .rbc-event {
          background-color: var(--brand-green);
          border-radius: 4px;
        }
        .rbc-today {
          background-color: rgba(31, 109, 74, 0.05);
        }
        .rbc-header {
          padding: 8px;
          font-weight: 600;
        }
      `}</style>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        date={date}
        view={view}
        onNavigate={(newDate) => setDate(newDate)}
        onView={(newView) => setView(newView)}
        components={{
          event: CustomEvent
        }}
      />
    </div>
  );
}
