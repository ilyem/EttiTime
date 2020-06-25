import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  showText: boolean;
  @Input() infoText: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum hasbeenthe industry's";
  constructor() { }

  ngOnInit() {
  }

}
