import Subject from './subject';
import { Lesson, Attachment } from './event';

export enum Models {
    Subject = "subject",
    Attachment = "attachment",
    Lesson = "lesson",
    Timeline = "timeline",
    Event = "event"
}

export default class FormInput {
    label?: string;
    name: string;
    type: string;
    placeholder: string
    value: string
    required?: boolean
    readonly?: boolean
    constructor(name, value, placeholder, type?, required?, label?) {
        this.label = label ? label : name;
        this.value = value;
        this.name = name;
        this.placeholder = placeholder
        this.required = required
        this.type = type ? type : 'text'
    }
};

export const loginInputs: FormInput[] = [
    {
        label: "email",
        name: "email",
        type: "text",
        placeholder: "Enter your email adress",
        value: "",
        required: true
    },
    {
        label: "password",
        name: "password",
        type: "password",
        placeholder: "Type password",
        value: "",
        required: true
    }
]
export const subjectInputs = ({ description = '' }: Subject): FormInput[] => {
    return [
        {
            label: "description",
            name: "description",
            type: "text",
            placeholder: "Enter your module description",
            value: description,
            required: true
        }]
}
export const lessonInputs = (lesson: Lesson): FormInput[] => {
    let inputs: FormInput[] = [
        {
            label: "title",
            name: "title",
            type: "text",
            placeholder: "Enter your lesson title",
            value: lesson.title,
            required: true
        }
    ]
    if (lesson.description) {
        inputs.push({
            label: "description",
            name: "description",
            type: "text",
            placeholder: "Enter your lesson description",
            value: lesson.description
        })
    }
    return inputs;
};
export const attachmentInputs = (attachment: Attachment): FormInput[] => {
    return [
        {
            label: "name",
            name: "name",
            type: "text",
            placeholder: "Enter your attachment name",
            value: attachment.name,
            required: true
        },
        {
            label: "link",
            name: "link",
            type: "text",
            placeholder: "Enter your attachment link",
            value: attachment.link,
            required: true
        }
    ]
}
export const eventInputs = (event: Event): FormInput[] => {
    return [
        {
            label: "subject",
            name: "subject",
            type: "select",
            placeholder: "Enter the related subject",
            value: '',
            required: true
        },
        {
            label: "type",
            name: "type",
            type: "select",
            placeholder: "Enter the event type",
            value: '',
            required: true
        },
        {
            label: "hour",
            name: "hour",
            type: "select",
            placeholder: "Enter the event start hour",
            value: '',
            required: true
        },
        {
            label: "minutes",
            name: "minutes",
            type: "select",
            placeholder: "Enter the event start minutes",
            value: '',
            required: true
        },
        {
            label: "hour",
            name: "hour",
            type: "select",
            placeholder: "Enter the event end hour",
            value: '',
            required: true
        },
        {
            label: "minutes",
            name: "minutes",
            type: "select",
            placeholder: "Enter the event end minutes",
            value: '',
            required: true
        },
        {
            label: "hour",
            name: "hour",
            type: "select",
            placeholder: "Enter the event start hour",
            value: '',
            required: true
        },
        {
            label: "classroom",
            name: "classroom",
            type: "text",
            placeholder: "Enter the event classroom name",
            value: '',
            required: true
        },
        {
            label: "hour",
            name: "hour",
            type: "select",
            placeholder: "Enter the event start hour",
            value: '',
            required: true
        }
    ]
}
// TODO
export const timelineInputs = ({ name = '', link = '' }: Attachment): FormInput[] => {

    return [
        {
            label: "name",
            name: "name",
            type: "text",
            placeholder: "Enter your attachment name",
            value: name,
            required: true
        },
        {
            label: "link",
            name: "link",
            type: "text",
            placeholder: "Enter your attachment link",
            value: link,
            required: true
        }
    ]
}

export const getObjectInputs = (item, type: Models) => {

    switch (type) {
        case Models.Subject:
            return subjectInputs(item)
        case Models.Attachment:
            return attachmentInputs(item)
        case Models.Lesson:
            return lessonInputs(item)
        case Models.Event:
            return eventInputs(item)

    }
}