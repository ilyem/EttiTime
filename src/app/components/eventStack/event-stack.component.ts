import { Component, OnInit} from '@angular/core';
import { Event } from 'src/app/models/event';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-event-stack',
  templateUrl: './event-stack.component.html',
  styleUrls: ['./event-stack.component.scss']
})
export class EventStackComponent implements OnInit {
  hours: number[] = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  events: Event[] = [
    {
      name: "Structuri de Date si Algoritmi",
      abbreviation: "SDA",
      type: 'course',
      teacher: "M. Ionescu",
      classroom: "B313",
      day: "Monday",
      starts: { hour: 8, minutes: 30 },
      ends: { hour: 10, minutes: 0 },
      attachments: [],
    },
    {
      name: "Tehnologii Calculatoare",
      abbreviation: "TC",
      type: 'course',
      teacher: "M. Ionescu",
      classroom: "B313",
      day: "Friday",
      starts: { hour: 8, minutes: 30 },
      ends: { hour: 10, minutes: 30 },
      attachments: [],
      exam: {
        attachments: [],
      }
    },
    {
      name: "Măsurări în Electronică și Telecomunicații",
      abbreviation: "METc",
      type: 'course',
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
      lecture: {
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
      type: 'course',
      teacher: "M. Ionescu",
      day: "Tuesday",
      starts: { hour: 13, minutes: 0 },
      ends: { hour: 14, minutes: 0 },
      attachments: [],
    },
    {
      name: "TRAR",
      abbreviation: "TRAR",
      type: 'course',
      teacher: "M. Ionescu",
      day: "Tuesday",
      starts: { hour: 17, minutes: 30 },
      ends: { hour: 19, minutes: 0 },
      attachments: [],
    }
  ]
  date: Date = new Date();

  constructor( public utils: UtilsService ) {
  }

  ngOnInit() {
  }
}
