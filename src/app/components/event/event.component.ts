import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Event, Attachment } from 'src/app/models/event';
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
  @ViewChild('preview') preview: TemplateRef<any>;
  @ViewChild('details') details: TemplateRef<any>;
  eventView: TemplateRef<any>;
  timeInterval: number;
  showAttachments: boolean = false;
  attachments: Attachment[];

  constructor(private utilsService: UtilsService) {
  }

  ngOnInit() {
    console.log(this.event);
    this.attachments = this.event.lecture ? [...this.event.lecture.attachments, ...this.event.attachments] : this.event.attachments;
    // this.timeInterval = this.utilsService.getTimeInterval(this.event.starts, this.event.ends);
    // this.showPreview();
    //this.showDetails();
  }
  toggleAttachments () {
    this.showAttachments = !this.showAttachments
  }
  showDetails() {
    this.eventView = this.details;
  }
  showPreview() {
   this.eventView = this.preview;
  }


}
