import Subject from './subject';
import { Lesson, Attachment } from './event';

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
export const subjectInputs = (module: Subject): FormInput[] => {
    return [
        {
            label: "description",
            name: "description",
            type: "text",
            placeholder: "Enter your module description",
            value: module.description,
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