import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import FormInput from 'src/app/models/input';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() inputs: FormInput[];
  @Input() submitText: string;
  @Input() disableForm: boolean;
  @Output() formSubmit: EventEmitter<FormGroup['value']> = new EventEmitter();
  @ViewChild('generalForm') generalForm;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.disableForm ? this.generalForm.form.disable() : undefined)
  }
  onSubmit(value: FormGroup["value"]) {
    console.log(value);
    this.formSubmit.emit(value);
  }

}
