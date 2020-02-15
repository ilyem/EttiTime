import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
  @Input() formName: string;
  @Input() handleSubmit: (form: FormGroup['value']) => void;
  @ViewChild('generalForm') generalForm;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.disableForm ? this.generalForm.form.disable() : undefined)
  }
  onSubmit(form: FormGroup) {
    this.generalForm.form.disable()
    console.log(form);
    this.handleSubmit(form.value);
  }

}
