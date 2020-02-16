import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lesson, Attachment } from 'src/app/models/event';
import FormInput, { lessonInputs, moduleInputs, attachmentInputs } from 'src/app/models/input';
import { FormGroup } from '@angular/forms';
import { PopupComponent } from 'src/app/components/popup/popup.component';
export const modul = {
  name: "Modul 1",
  teacher: "Vlad Grosu",
  description: "dsknfkjsfnkjfnsekjfnekjfenkjef",
  lessons: [
    {
      nr: 1,
      title: "Lesson 1",
      description: "sfjkbksjbfskdfbskfjb",
      attachments: [
        {
          name: "Attachment 1",
          link: "#"
        },
        {
          name: "Attachment 2",
          link: "#"
        }
      ]
    },
    {
      nr: 2,
      title: "Lesson 2",
      description: "sfjkbksjbfskdfbskfjb",
      attachments: [
        {
          name: "Attachment 1",
          link: "#"
        },
        {
          name: "Attachment 2",
          link: "#"
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  module = modul;
  inputs: FormInput[];
  submitText: string = "save";
  showPopup: boolean = false;
  currentContext: any
  @ViewChild(PopupComponent) popup: PopupComponent;
  constructor() { }

  ngOnInit() {
    console.log(this.module);
  }
  toModify(item, type) {
    switch (type) {
      case 'module':
        return moduleInputs(item)
      case 'attachment':
        return attachmentInputs(item)
      case 'lesson':
        return lessonInputs(item)
    }
  }

  onSubmit(formValues, type) {
    console.log(formValues);
    Object.keys(formValues).forEach(key => {
      this.currentContext.item[key] = formValues[key];
    })
    this.popup.togglePopup();
  }
  setForm(item, type) {
    this.inputs = this.toModify(item, type);
    this.currentContext = { item, type };
    this.popup.togglePopup();
  }
}
