import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lesson, Attachment } from 'src/app/models/event';
import FormInput, { lessonInputs, subjectInputs, attachmentInputs } from 'src/app/models/input';
import { FormGroup } from '@angular/forms';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { ActivatedRoute } from '@angular/router';

export const subject = {
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
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  subject = subject;
  id: string;
  inputs: FormInput[];
  submitText: string = "save";
  showPopup: boolean = false;
  currentContext: any
  @ViewChild(PopupComponent) popup: PopupComponent;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

  };
  toModify(item, type) {
    switch (type) {
      case 'subject':
        return subjectInputs(item)
      case 'attachment':
        return attachmentInputs(item)
      case 'lesson':
        return lessonInputs(item)
    }
  }

  onSubmit(formValues, type: String) {
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
