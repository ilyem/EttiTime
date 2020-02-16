import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  show: boolean
  constructor() { }

  ngOnChanges() {
    // console i never see
    console.log('parentObj Changed and got me here');
  }
  ngOnInit() {
  }
  togglePopup() {
    this.show = !this.show
  }

}
