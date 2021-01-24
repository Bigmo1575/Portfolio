

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  initialDate: '2021-01-07',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  events: [
      {
        title: 'work',
      start: '2021-01-25T08:00:00',
      end: '2021-01-25T12:00:00' 
      },
    {
      title: 'Agile Programming',
      start: '2021-01-27T13:00:00',
      end: '2021-01-27T116:55:00'
    },
    {
      title: 'IT Help Desk',
      start: '2021-01-27T18:00:00',
      end: '2021-01-27T20:00:00'
    },
    {
      title: 'work',
      start: '2021-01-28T08:00:00',
      end: '2021-01-28T12:00:00' 
    },
    {
      title: 'work',
      start: '2021-01-29T08:00:00',
      end: '2021-01-29T12:00:00' 
    }
   
    
  ]
});

calendar.render();
});