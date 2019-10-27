import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Event } from 'src/app/models/event';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  // showDetails: boolean = false;
  @Input() parentHeight: number;
  @Input() event: Event;
  @ViewChild('eventPreview') preview: TemplateRef<any>;
  @ViewChild('eventDetails') details: TemplateRef<any>;
  eventView: TemplateRef<any>;
  timeInterval: number;

  constructor(private utilsService: UtilsService) {
  }

  ngOnInit() {
    this.timeInterval = this.utilsService.getTimeInterval(this.event.starts, this.event.ends);
    // this.showPreview();
    this.showDetails();
  }
  showDetails() {
    this.eventView = this.details;
  }
  showPreview() {
    // this.eventView = this.preview;
  }


}
