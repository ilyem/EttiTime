import { Component, OnInit, Input } from '@angular/core';

const icons = {
  pen: 'assets/pen.svg'
}
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() type: string;
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = icons[this.type];
  }

}
