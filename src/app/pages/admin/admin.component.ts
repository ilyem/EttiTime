import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { WeekDays } from 'src/app/models/date';
import { BreakPoint } from 'src/app/models/responsive';
import { Event, EventType } from 'src/app/models/event';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  days: string[];
  hours: number[] = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  events: Event[] = [
    {
      name: "Structuri de Date si Algoritmi",
      abbreviation: "SDA",
      type: EventType.Course,
      teacher: "M. Ionescu",
      day: "Monday",
      starts: { hour: 8, minutes: 30 },
      ends: { hour: 10, minutes: 0 },
      attachments: [],
    },
    {
      name: "Tehnologii Calculatoare",
      abbreviation: "TC",
      type: EventType.Course,
      teacher: "M. Ionescu",
      day: "Friday",
      starts: { hour: 8, minutes: 30 },
      ends: { hour: 10, minutes: 30 },
      attachments: [],
    },
    {
      name: "Măsurări în Electronică și Telecomunicații",
      abbreviation: "METc",
      type: EventType.Course,
      teacher: "M. Ionescu",
      day: "Tuesday",
      starts: { hour: 9, minutes: 30 },
      ends: { hour: 10, minutes: 45 },
      attachments: [
        {
          name: 'Carte1',
          link: 'http://atm.neuro.pub.ro/rradescu/ASC/CopertaASC2008.jpg'
        },
        {
          name: 'Carte2',
          link: 'http://atm.neuro.pub.ro/rradescu/ASC/CopertaASC2008.jpg'
        }
      ],
      lesson: {
        nr: 2,
        title: "Tensiunea de prag elemente rezistive",
        attachments: [
          {
            name: 'Curs2',
            link: 'http://atm.neuro.pub.ro/rradescu/ASC/CopertaASC2008.jpg'
          }
        ]
      }
    },
    {
      name: "Grafică Inginerească și Desen Tehnic",
      abbreviation: "Grafica",
      type: EventType.Course,
      teacher: "M. Ionescu",
      day: "Tuesday",
      starts: { hour: 13, minutes: 0 },
      ends: { hour: 14, minutes: 0 },
      attachments: [],
    },
    {
      name: "TRAR",
      abbreviation: "TRAR",
      type: EventType.Course,
      teacher: "M. Ionescu",
      day: "Tuesday",
      starts: { hour: 17, minutes: 30 },
      ends: { hour: 19, minutes: 0 },
      attachments: [],
    }
  ]
  orderedEvents: any;
  windowWidth: number;
  breakPoint = BreakPoint;
  rowHeight = 25;
  date: Date = new Date();


  @ViewChild('scheduleHeader') scheduleHeader;
  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  constructor() {
    this.days = Object.keys(WeekDays).slice(Object.keys(WeekDays).length / 2);
    console.log(Object.keys(WeekDays))
    this.orderedEvents = this.eventsOrderedByTime(this.events);
  }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    // TODO get current week events
  }

  // getTimeInterval(startTime, endTime) {
  //   return (endTime.hour * 60 + endTime.minutes - startTime.hour * 60 - startTime.minutes) / 60
  // }

  eventsOrderedByTime(events) {
    let orderedEvents = {};
    events.map(event => {
      const startHour = event.starts.hour;
      if (orderedEvents[event.day] === undefined) {
        orderedEvents[event.day] = {};
      }
      orderedEvents[event.day][startHour] = orderedEvents[event.day][startHour] ?
        [...orderedEvents[event.day][startHour], event] : [event];
    })
    return orderedEvents;
  }

}

